import { useGLTF } from '@react-three/drei'
import React,{useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/skybox_anime_sky.glb'
const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta)=>{
        if(isRotating){
            skyRef.current.rotation.y += 0.25 * delta
        }
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} position={[0,380,50]} scale={[0.8,0.8,0.8]} rotation={[0, 0, 0]}/>
    </mesh>
  )
}

export default Sky;