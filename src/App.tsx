import "./App.css";
import PTZControl from "./PTZControl";

function App() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#404040] min-h-screen text-black">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <PTZControl />
      </div>
    </div>
  );
}

export default App;
