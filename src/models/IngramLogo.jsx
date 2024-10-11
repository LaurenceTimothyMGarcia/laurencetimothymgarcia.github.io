/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 IngramLogo.gltf 
*/
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 IngramLogo.gltf 
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/IngramLogo/IngramLogo.gltf')
  const groupRef = useRef()

  const [rotateForward, setRotateForward] = useState(false);

  // Rotates back and forth showing only the front side
  useFrame(() => {
    if (rotateForward) {
      groupRef.current.rotation.y += 0.0025;

      if (groupRef.current.rotation.y >= Math.PI / 8) {
        // Reached 45 degrees, switch rotation direction
        setRotateForward(false);
      }
    } else {
      groupRef.current.rotation.y -= 0.0025; // Adjust the rotation speed here
      if (groupRef.current.rotation.y <= -Math.PI / 8) {
        // Reached 0 degrees, switch rotation direction
        setRotateForward(true);
      }
    }
  })

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.path0.geometry} material={materials['SVGMat.001']} rotation={[Math.PI / 2, 0, 0]} scale={185.794} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[-5, -5, -5]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
    </group>
  )
}

useGLTF.preload('/models/IngramLogo/IngramLogo.gltf')

