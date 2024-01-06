/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Nick_IsoRoom.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/Nick_Room/Nick_IsoRoom.gltf')
  const groupRef = useRef()

  // Looks at mouse
  // useFrame(({ mouse, viewport }) => {
  //   const x = (mouse.x * viewport.width) / 2.5
  //   const y = (mouse.y * viewport.height) / 2.5
  //   groupRef.current.lookAt(x, y, 1)
  // })

  // Rotate based on scroll
  // useFrame(() => {
  //   // Get Scroll position
  //   const scrollTop = window.scrollY;

  //   // Calc rotation based on scroll pos
  //   const rotationSpeed = 0.0005;
  //   const rotationY = scrollTop * rotationSpeed;

  //   if (groupRef.current) {
  //     groupRef.current.rotation.y = rotationY;
  //   }
  // })

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[-4.923, 0.454, 9.766]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Text001.geometry} material={materials['Nick Orange']} />
        <mesh geometry={nodes.Text001_1.geometry} material={materials['Text InnerBackdrop']} />
        <mesh geometry={nodes.Text001_2.geometry} material={materials.Light} />
      </group>
      <mesh geometry={nodes.Rug.geometry} material={materials.Rug} position={[1.551, 0.468, 1.885]} />
      <mesh geometry={nodes.Black_Entrance.geometry} material={materials.Door} position={[-5.136, 1.677, 7.977]} rotation={[0, 0, -Math.PI / 2]} />
      <group position={[1.953, 1.664, 8.952]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.BarTableBase} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.BarTableDiv} />
      </group>
      <group position={[0.544, 4.246, -9.571]} rotation={[0.125, 0, 0]}>
        <mesh geometry={nodes.Cube068.geometry} material={materials.TV} />
        <mesh geometry={nodes.Cube068_1.geometry} material={materials.Scree} />
      </group>
      <group position={[0.284, 1.375, -4.236]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[1.861, 1.375, -4.236]}>
        <mesh geometry={nodes.Cube016.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[0.284, 1.375, -1.455]}>
        <mesh geometry={nodes.Cube027.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube027_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[1.861, 1.375, -1.455]}>
        <mesh geometry={nodes.Cube028.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube028_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[0.284, 1.375, 1.884]}>
        <mesh geometry={nodes.Cube029.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube029_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[1.861, 1.375, 1.884]}>
        <mesh geometry={nodes.Cube030.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube030_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, -2.424]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube021.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube021_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, -4.008]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube022.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube022_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, 0.759]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube023.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, -0.838]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube024.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube024_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, 3.935]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube025.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube025_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[4.571, 1.375, 2.344]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube026.geometry} material={materials.Table} />
        <mesh geometry={nodes.Cube026_1.geometry} material={materials.TableStand} />
      </group>
      <group position={[-0.386, 1.314, 8.131]} rotation={[0, -0.164, 0]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[0.654, 1.314, 7.874]} rotation={[0, 0.285, 0]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[1.508, 1.314, 8.262]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[2.481, 1.314, 8.138]} rotation={[0, 0.259, 0]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[3.507, 1.314, 8.049]} rotation={[0, -0.207, 0]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[4.276, 1.314, 7.988]}>
        <mesh geometry={nodes.Cube009.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[-0.386, 1.314, 9.532]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[0.654, 1.314, 9.491]} rotation={[0, -0.148, 0]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[1.508, 1.314, 9.532]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[2.481, 1.314, 9.512]} rotation={[0, 0.156, 0]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[3.507, 1.314, 9.532]}>
        <mesh geometry={nodes.Cube014.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials.StoolTop} />
      </group>
      <group position={[4.276, 1.314, 9.532]}>
        <mesh geometry={nodes.Cube015.geometry} material={materials.BaseStool} />
        <mesh geometry={nodes.Cube015_1.geometry} material={materials.StoolTop} />
      </group>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair} position={[3.874, 0.985, 4.34]} rotation={[0, 1.397, 0]} />
      <mesh geometry={nodes.Chair001.geometry} material={materials.Chair} position={[-0.091, 0.985, -5.07]} rotation={[0, -0.198, 0]} />
      <mesh geometry={nodes.Chair002.geometry} material={materials.Chair} position={[0.662, 0.985, -4.975]} rotation={[0, 0.038, 0]} />
      <mesh geometry={nodes.Chair003.geometry} material={materials.Chair} position={[0.662, 0.985, -3.494]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair004.geometry} material={materials.Chair} position={[-0.091, 0.985, -3.494]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair005.geometry} material={materials.Chair} position={[1.475, 0.985, -4.975]} rotation={[0, 0.236, 0]} />
      <mesh geometry={nodes.Chair006.geometry} material={materials.Chair} position={[2.228, 0.985, -4.975]} rotation={[0, 0.117, 0]} />
      <mesh geometry={nodes.Chair007.geometry} material={materials.Chair} position={[2.229, 0.985, -3.429]} rotation={[-Math.PI, 0.146, -Math.PI]} />
      <mesh geometry={nodes.Chair008.geometry} material={materials.Chair} position={[1.475, 0.985, -3.494]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair009.geometry} material={materials.Chair} position={[1.475, 0.985, -2.206]} rotation={[0, -0.07, 0]} />
      <mesh geometry={nodes.Chair010.geometry} material={materials.Chair} position={[2.228, 0.985, -2.206]} rotation={[0, -0.147, 0]} />
      <mesh geometry={nodes.Chair011.geometry} material={materials.Chair} position={[2.37, 0.985, -0.78]} rotation={[Math.PI, -0.26, Math.PI]} />
      <mesh geometry={nodes.Chair012.geometry} material={materials.Chair} position={[1.475, 0.985, -0.64]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair013.geometry} material={materials.Chair} position={[-0.077, 0.985, -2.288]} rotation={[0, 0.097, 0]} />
      <mesh geometry={nodes.Chair014.geometry} material={materials.Chair} position={[0.677, 0.985, -2.206]} rotation={[0, 0.119, 0]} />
      <mesh geometry={nodes.Chair015.geometry} material={materials.Chair} position={[0.677, 0.985, -0.726]} rotation={[Math.PI, -0.065, Math.PI]} />
      <mesh geometry={nodes.Chair016.geometry} material={materials.Chair} position={[-0.077, 0.985, -0.785]} rotation={[-Math.PI, 0.1, -Math.PI]} />
      <mesh geometry={nodes.Chair017.geometry} material={materials.Chair} position={[1.475, 0.985, 1.139]} rotation={[0, 0.192, 0]} />
      <mesh geometry={nodes.Chair018.geometry} material={materials.Chair} position={[2.228, 0.985, 1.139]} rotation={[0, -0.278, 0]} />
      <mesh geometry={nodes.Chair019.geometry} material={materials.Chair} position={[2.228, 0.985, 2.62]} rotation={[-Math.PI, 0.33, -Math.PI]} />
      <mesh geometry={nodes.Chair020.geometry} material={materials.Chair} position={[1.475, 0.985, 2.62]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair021.geometry} material={materials.Chair} position={[-0.077, 0.985, 1.279]} rotation={[0, 0.041, 0]} />
      <mesh geometry={nodes.Chair022.geometry} material={materials.Chair} position={[0.677, 0.985, 1.139]} />
      <mesh geometry={nodes.Chair023.geometry} material={materials.Chair} position={[0.677, 0.985, 2.47]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Chair024.geometry} material={materials.Chair} position={[-0.077, 0.985, 2.62]} rotation={[Math.PI, -0.135, Math.PI]} />
      <mesh geometry={nodes.Chair025.geometry} material={materials.Chair} position={[3.874, 0.985, -4.269]} rotation={[-Math.PI, 1.49, -Math.PI]} />
      <mesh geometry={nodes.Chair026.geometry} material={materials.Chair} position={[3.874, 0.985, -3.598]} rotation={[0, 1.532, 0]} />
      <mesh geometry={nodes.Chair027.geometry} material={materials.Chair} position={[3.785, 0.985, -2.833]} rotation={[-Math.PI, 1.375, -Math.PI]} />
      <mesh geometry={nodes.Chair028.geometry} material={materials.Chair} position={[3.874, 0.985, -2.046]} rotation={[0, 1.453, 0]} />
      <mesh geometry={nodes.Chair029.geometry} material={materials.Chair} position={[3.874, 0.985, -1.224]} rotation={[-Math.PI, 1.494, -Math.PI]} />
      <mesh geometry={nodes.Chair030.geometry} material={materials.Chair} position={[3.749, 0.985, -0.437]} rotation={[0, 1.487, 0]} />
      <mesh geometry={nodes.Chair031.geometry} material={materials.Chair} position={[3.942, 0.985, 0.364]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Chair032.geometry} material={materials.Chair} position={[3.874, 0.985, 1.15]} rotation={[-Math.PI, 1.329, -Math.PI]} />
      <mesh geometry={nodes.Chair033.geometry} material={materials.Chair} position={[3.874, 0.985, 1.951]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Chair034.geometry} material={materials.Chair} position={[4.01, 0.985, 2.738]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Chair035.geometry} material={materials.Chair} position={[3.665, 0.985, 3.553]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.BaseFloor} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials['Nick Orange Floor']} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Wall} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials.Ceiling} />
      <mesh geometry={nodes.Cube_4.geometry} material={materials.MossWall} />
      <mesh geometry={nodes.Cube_5.geometry} material={materials.OuterWall} />
    </group>
  )
}

useGLTF.preload('/models/Nick_Room/Nick_IsoRoom.gltf')
