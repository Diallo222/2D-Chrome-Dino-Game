/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: MayMax (https://sketchfab.com/MayMax)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/voxel-cactus-2x2-cbd281babb4146da9941c7760ca9b3f8
Title: Voxel Cactus 2x2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DoubleCactus(props) {
  const { nodes, materials } = useGLTF('/cactusx2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/cactusx2.glb')