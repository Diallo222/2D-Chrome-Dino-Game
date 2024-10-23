import React, { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { SingleCactus } from "../obstacles";
import { Box } from "@react-three/drei";

const Obstacles = () => {
  const [obstacles, setObstacles] = useState([]);

  // Move obstacles and remove them once they go off-screen
  useFrame(() => {
    setObstacles((prevObstacles) =>
      prevObstacles
        .map((obstacle) => ({
          ...obstacle, // Create a new object to avoid mutation
          position: [
            obstacle.position[0] - 0.05, // Move left on the X axis
            0, 
            0, 
          ],
        }))
        .filter((obstacle) => obstacle.position[0] > -10) // Remove obstacles that are off-screen
    );
  });

  // Spawn obstacles at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const newObstacle = {
        position: [10, 0, 0],
        key: Math.random(), 
      };
      setObstacles((prev) => [...prev, newObstacle]); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {obstacles.map((obstacle) => (
        <RigidBody
          key={obstacle.key}
          type="fixed"
          position={obstacle.position}
        >
            <Box >
          <meshStandardMaterial color="red" />
        </Box>
          
        </RigidBody>
      ))}
    </>
  );
};

export default Obstacles;
