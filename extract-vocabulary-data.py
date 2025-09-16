#!/usr/bin/env python3
import re
import json

# Read the vocabulary file
with open('src/data/vocabulary.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all ID and Japanese pairs using regex
id_pattern = r'id:\s*"([^"]+)"'
japanese_pattern = r'japanese:\s*"([^"]+)"'

ids = re.findall(id_pattern, content)
japanese_words = re.findall(japanese_pattern, content)

print(f"Total IDs found: {len(ids)}")
print(f"Total Japanese words found: {len(japanese_words)}")

# Check for duplicates
id_counts = {}
japanese_counts = {}

for id_val in ids:
    id_counts[id_val] = id_counts.get(id_val, 0) + 1

for word in japanese_words:
    japanese_counts[word] = japanese_counts.get(word, 0) + 1

# Find duplicates
duplicate_ids = [(id_val, count) for id_val, count in id_counts.items() if count > 1]
duplicate_japanese = [(word, count) for word, count in japanese_counts.items() if count > 1]

print(f"\nDuplicate IDs ({len(duplicate_ids)}):")
for id_val, count in duplicate_ids:
    print(f"  - '{id_val}' appears {count} times")

print(f"\nDuplicate Japanese words ({len(duplicate_japanese)}):")
for word, count in duplicate_japanese:
    print(f"  - '{word}' appears {count} times")

# Create pairs to identify which entries are duplicates
entries = []
entry_pattern = r'{\s*id:\s*"([^"]+)",\s*japanese:\s*"([^"]+)"'
matches = re.finditer(entry_pattern, content)

for match in matches:
    entries.append({
        'id': match.group(1),
        'japanese': match.group(2),
        'position': match.start()
    })

print(f"\nTotal entries matched: {len(entries)}")

# Find exact duplicates
seen_pairs = {}
duplicates_to_remove = []

for i, entry in enumerate(entries):
    key = (entry['id'], entry['japanese'])
    if key in seen_pairs:
        duplicates_to_remove.append(entry)
        print(f"Duplicate found: {entry['id']} ({entry['japanese']}) at position {entry['position']}")
    else:
        seen_pairs[key] = entry

print(f"\nTotal duplicates to remove: {len(duplicates_to_remove)}")

# Save analysis
analysis = {
    'total_ids': len(ids),
    'total_japanese': len(japanese_words),
    'unique_ids': len(set(ids)),
    'unique_japanese': len(set(japanese_words)),
    'duplicate_ids': duplicate_ids,
    'duplicate_japanese': duplicate_japanese,
    'duplicates_to_remove': duplicates_to_remove
}

with open('vocabulary_analysis.json', 'w', encoding='utf-8') as f:
    json.dump(analysis, f, indent=2, ensure_ascii=False)

print(f"\nAnalysis saved to vocabulary_analysis.json")
print(f"Unique entries: {len(seen_pairs)}")
print(f"Duplicates to remove: {len(duplicates_to_remove)}")