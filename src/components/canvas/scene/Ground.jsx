import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Plane } from '@react-three/drei';

const Ground = (props) => {
  const groundRef = useRef();

//   useFrame(() => {
//     if (groundRef.current) {
//       // Move the ground backward along the Z-axis
//       groundRef.current.position.x -= 0.1;

//       // Reset position to create a looping effect
//       if (groundRef.current.position.x < -20) {
//         groundRef.current.position.x = 0;
//       }
//     }
//   });

  return (
    <RigidBody type="fixed" {...props}>
      <Plane
        // ref={groundRef}
        args={[200, 100]}
        position={[0, 0, 0]}
        rotation-x={-Math.PI / 2}
      >
        <meshStandardMaterial color="springgreen" />
      </Plane>
    </RigidBody>
  );
};

export default Ground;
