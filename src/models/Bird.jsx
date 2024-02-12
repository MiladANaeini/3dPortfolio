import React from 'react'
import birdScene from '../assets/3d/low_poly_bird_animated.glb'
import { useGLTF } from '@react-three/drei'
const Bird = () => {
    const {scene, animations} = useGLTF(birdScene);
  return (
    <mesh position={[0,0,0]} scale={[0.25,0.25,0.25]} rotation={[0, 90, 0]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird