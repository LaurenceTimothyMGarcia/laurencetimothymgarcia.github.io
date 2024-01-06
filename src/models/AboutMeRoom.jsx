/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 AboutMeRoom.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/AboutMe_Room/AboutMeRoom.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Desk.geometry} material={materials.DeskBase} position={[-1.674, 3.517, -7.724]} />
      <mesh geometry={nodes.DeskUpper.geometry} material={materials.DeskUpper} position={[-1.742, 4.398, -8.656]} />
      <mesh geometry={nodes.NightStand.geometry} material={materials.Nightstand} position={[-8.045, 1.122, 0.303]} />
      <group position={[-3.468, 4.91, -8.694]} rotation={[0, 0.231, 0]} scale={0.544}>
        <mesh geometry={nodes.Cube009.geometry} material={materials.MonitorBase} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.Screen} />
      </group>
      <group position={[-0.575, 5.318, -8.747]} rotation={[0, -0.222, 0]} scale={0.544}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.MonitorBase} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.Screen} />
      </group>
      <mesh geometry={nodes.MonitorStand.geometry} material={materials.MonitorStand} position={[-0.662, 4.414, -8.542]} rotation={[0, -0.111, 0]} scale={0.544} />
      <group position={[-8.117, 4.38, -1.885]} rotation={[-Math.PI, 1.014, -Math.PI]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials.CLA} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.CLASecondary} />
      </group>
      <mesh geometry={nodes.Bed.geometry} material={materials.Bed} position={[-4.777, 2.719, 6.614]} />
      <mesh geometry={nodes.Bedframe.geometry} material={materials.Bedframe} position={[-4.777, 1.774, 6.65]} />
      <mesh geometry={nodes.Pillow.geometry} material={materials.Pillow} position={[-7.452, 3.768, 7.907]} rotation={[0.046, 0.169, 1.285]} />
      <mesh geometry={nodes.Pillow001.geometry} material={materials.Pillow} position={[-7.603, 3.711, 5.522]} rotation={[-0.022, -0.069, 1.241]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.RoomBase} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.RoomFloor} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.RoomWalls} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials.Outdoors} />
      <mesh geometry={nodes.Cube_4.geometry} material={materials.Window} />
    </group>
  )
}

useGLTF.preload('/models/AboutMe_Room/AboutMeRoom.gltf')
