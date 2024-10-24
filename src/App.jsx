import { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Game } from "./components/canvas/scene";
import { Physics } from "@react-three/rapier";
import { StartMenu } from "./components/UI";

export const Controls = {
  jump: "jump",
};

function App() {
  const map = useMemo(() => [{ name: Controls.jump, keys: ["Space"] }], []);

  return (
    <div className="relative z-0 bg-white w-screen h-screen overscroll-none overflow-y-hidden scrollbar-thin -ms-overflow-y-hidden">
      <StartMenu />
      <KeyboardControls map={map}>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ position: [0, 2, 10], fov: 200, near: 1, far: 100 }}
        >
          <color attach="background" args={["#ebebeb"]} />
          <Physics gravity={[0, -9.81, 0]} debug>
            <ambientLight intensity={1} />
            <Game />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
