import React from 'react'
import baloonScene from '../assets/3d/lowpoly_baloon.glb'
import { useGLTF } from '@react-three/drei'
const Baloon = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(baloonScene);
  return (
    <mesh {...props} scale={[.25,.25,.25]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Baloon