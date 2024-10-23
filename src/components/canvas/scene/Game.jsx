import React, { useEffect, useState, useRef } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Box, Plane, useKeyboardControls } from "@react-three/drei";
import Ground from "./Ground";
import { Dino } from "../character";
import { Controls } from "../../../App";
import { useFrame } from "@react-three/fiber";
import Obstacles from "./Obstacles";

const Game = () => {
  const [started, setStarted] = useState(false);
  const dino = useRef();
  const isOnFloor = useRef();
  const jumpRequested = useRef(false); // Track jump request

  const toggleGame = () => {
    setStarted(!started);
  };

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
      {/* <Dino /> */}

      <RigidBody
        position={[0, 4, 0]}
        ref={dino}
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = true;
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject.name === "floor") {
            isOnFloor.current = false;
          }
        }}
      >
        <Box onClick={toggleGame}>
          <meshStandardMaterial color="red" />
        </Box>
      </RigidBody>
      {started && <Obstacles />}
      <Ground name="floor" />
    </>
  );
};

export default Game;
