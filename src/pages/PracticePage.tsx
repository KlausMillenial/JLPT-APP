import DrawingCanvas from "../components/DrawingCanvas";


export default function PracticePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-6">
      <h1 className="text-xl font-bold mb-4">✍️ Practice Writing</h1>
      <DrawingCanvas />
    </div>
  );
}
