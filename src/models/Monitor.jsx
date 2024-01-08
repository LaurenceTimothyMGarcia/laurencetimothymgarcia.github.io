/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Monitor.gltf 
*/

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/Monitor/Monitor.gltf')

  const groupRef = useRef();

  const [rotateForward, setRotateForward] = useState(true);

  // Rotates back and forth showing only the front side
  useFrame(() => {
    if (rotateForward) {
      groupRef.current.rotation.y += 0.0025;

      if (groupRef.current.rotation.y >= Math.PI / 4) {
        // Reached 45 degrees, switch rotation direction
        setRotateForward(false);
      }
    } else {
      groupRef.current.rotation.y -= 0.0025; // Adjust the rotation speed here
      if (groupRef.current.rotation.y <= -Math.PI / 4) {
        // Reached 0 degrees, switch rotation direction
        setRotateForward(true);
      }
    }
  })

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.MonitorBase} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.Screen} />
    </group>
  )
}

useGLTF.preload('/models/Monitor/Monitor.gltf')
