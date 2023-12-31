import React from "react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"
import NickIsoRoom from '../../models/Nick_IsoRoom'

function WorkExpCanvas() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <NickIsoRoom/>
      </Suspense>

      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[25, 25, 25]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <OrbitControls/>
    </Canvas>
  )
}

export default WorkExpCanvas;