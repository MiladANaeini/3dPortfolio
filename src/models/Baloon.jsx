import React, { useRef } from 'react'
import baloonScene from '../assets/3d/baloon.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Baloon = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(baloonScene);
    const baloonRef = useRef();


    useFrame(({clock, camera}) => { 
      baloonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2
    
     if(baloonRef.current.position.x > camera.position.x +10){
       baloonRef.current.rotation.y = Math.PI;
     } else if(baloonRef.current.position.x < camera.position.x -10){
      baloonRef.current.rotation.y = 0;
     }
    
    
      if(baloonRef.current.rotation.y === 0) {
        baloonRef.current.position.x += 0.01;
      } else {
        baloonRef.current.position.x -= 0.01;
      }
     })
  return (
    <mesh ref={baloonRef} {...props} scale={[.15,.15,.15]} position={[0,-20,-3]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Baloon