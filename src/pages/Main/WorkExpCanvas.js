import React from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"
import colors from "../../theme/Color"

function CamSettings({position, rotation}) {

  const { camera } = useThree();

  camera.near = 0.1
  camera.far = 1000

  // Set camera position, rotation, and scale
  camera.position.set(position[0], position[1], position[2])
  camera.rotation.set(rotation[0] * Math.PI / 180, rotation[1] * Math.PI / 180, rotation[2] * Math.PI / 180)

  camera.updateProjectionMatrix()

  return null;
}

function WorkExpCanvas({item, pos, rot}) {

  return (
    <Canvas orthographic={false}>
      <Suspense fallback={null}>
        <CamSettings position={pos} rotation={rot}/>
        {item}
        {/* <NickIsoRoom/> */}
        {/* <Plane/> */}
      </Suspense>

      <ambientLight intensity={Math.PI / 2} />
      {/* <spotLight position={[25, 25, 25]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}

      <OrbitControls/>
    </Canvas>
  )
}

function Plane() {
  return(
    <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]}/>
      <meshBasicMaterial color={colors.text} />
    </mesh>
  )
}

export default WorkExpCanvas;