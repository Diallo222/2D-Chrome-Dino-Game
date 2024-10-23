import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Game } from "./components/canvas/scene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative z-0 bg-white w-screen h-screen overscroll-none overflow-y-hidden scrollbar-thin -ms-overflow-y-hidden">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 2, 10], fov: 50, near: 1, far: 100 }}
      >
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={1} />
        <Game />
      </Canvas>
    </div>
  );
}

export default App;
