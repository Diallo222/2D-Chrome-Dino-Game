import React from "react";
import { Dino } from "../character";

const Game = () => {
  return (
    <>
      <Dino />
      <mesh receiveShadow position={[0, -0.56, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#a8a8a8" />
      </mesh>
    </>
  );
};

export default Game;
