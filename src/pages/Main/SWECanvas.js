import React from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"

import AboutMeRoom from '../../models/AboutMeRoom'

function CamSettings() {
  const { camera } = useThree();

  camera.near = 0.1;
  camera.far = 1000;

  // Set camera position, rotation, and scale
  camera.position.set(19, 25, 19)
  camera.rotation.set(-45 * Math.PI / 180, 45 * Math.PI / 180, 35 * Math.PI / 180)

  camera.updateProjectionMatrix()

  return null;
}

function SWECanvas() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <AboutMeRoom />
        <CamSettings />
      </Suspense>

      <ambientLight intensity={Math.PI / 2} />
      {/* <spotLight position={[25, 25, 25]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
      <OrbitControls/>
    </Canvas>
  )
}

export default SWECanvas;