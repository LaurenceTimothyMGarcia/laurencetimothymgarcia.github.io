import React from "react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"
import BaseIsoRoom from '../../models/BaseIsoRoom'

function AboutMeCanvas() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <BaseIsoRoom/>
      </Suspense>

      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[25, 25, 25]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <OrbitControls/>
    </Canvas>
  )
}

export default AboutMeCanvas;