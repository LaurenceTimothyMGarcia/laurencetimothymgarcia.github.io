import React, { useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"
import NickIsoRoom from '../../models/Nick_IsoRoom'
import colors from "../../theme/Color"

function CamSettings() {

  const { camera } = useThree();

  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  // Change this value to adjust the view size 
  const frustumSize = 17;

  camera.left = -frustumSize * aspect / 2
  camera.right = frustumSize * aspect / 2
  camera.top = frustumSize / 2
  camera.bottom = -frustumSize / 2
  camera.near = 0.1
  camera.far = 1000

  // Set camera position, rotation, and scale
  camera.position.set(17, 16, 12)
  camera.rotation.set(-45 * Math.PI / 180, 45 * Math.PI / 180, 35 * Math.PI / 180)
  camera.scale.set(1, 1, 1)

  camera.updateProjectionMatrix()

  return null;
}

function WorkExpCanvas() {

  return (
    <Canvas orthographic={true}>
      <Suspense fallback={null}>
        <CamSettings/>
        <NickIsoRoom/>
        {/* <Plane/> */}
      </Suspense>

      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[25, 25, 25]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
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