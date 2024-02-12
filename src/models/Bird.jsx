import React, { useRef,useEffect } from 'react'
import birdScene from '../assets/3d/seagulls_animated.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Bird = ({isRotating}) => {
    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef);

    useEffect(()=>{
      if(isRotating){
          actions['Take 001'].play();
      }else {
          actions['Take 001'].play();
      }
   })
  return (
    <mesh ref={birdRef} position={[-8,0,0]} scale={[0.25,0.25,0.25]} rotation={[0, 90, 0]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird