import React, { useEffect, useState, useRef } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, Plane, useKeyboardControls } from "@react-three/drei";
import Ground from "./Ground";
import { Dino } from "../character";
import { Controls } from "../../../App";
import { useFrame } from "@react-three/fiber";
import Obstacles from "./Obstacles";
import { useGameStore } from "../../../store/hooks";

const Game = () => {
  const { start } = useGameStore();
  const toggleGame = useGameStore((state) => state.setStart);
  const dino = useRef();
  const isOnFloor = useRef(true); // Initialize with true assuming Dino starts on the ground
  const jumpRequested = useRef(false); // Track jump request

  const jump = () => {
    if (isOnFloor.current) {
      dino.current.applyImpulse({ x: 0, y: 7, z: 0 });
      isOnFloor.current = false;
    }
  };

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  useFrame(() => {
    // Check if the jump key was just pressed
    if (jumpPressed && !jumpRequested.current) {
      jump();
      jumpRequested.current = true;
    }

    if (!jumpPressed) {
      jumpRequested.current = false;
    }
  });

  return (
    <>
     
    
      <RigidBody
        position={[0, 4, 0]}
        ref={dino}
        // type="fixed"
        colliders="cuboid"
        includeInvisible
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = true;
          }
          if (other.rigidBodyObject.name === "obstacle") {
            toggleGame();
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = false;
          }
        }}
      >
        <Dino />
      </RigidBody>
      {start && <Obstacles />}
      <Ground name="floor" />
    </>
  );
};

export default Game;
