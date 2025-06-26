import "./App.css";
import PTZControl from "./PTZControl";

function App() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#808080] min-h-screen text-black">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-4">Camera Controls</h1>
      <PTZControl />
      </div>
    </div>
  );
}

export default App;
