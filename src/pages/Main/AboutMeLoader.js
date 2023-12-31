import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function AboutMeLoader () {
  const gltf = useLoader(GLTFLoader, '../../models/BaseIsoRoom.gltf')
}