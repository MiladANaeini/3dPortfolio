import React ,{useEffect, useRef} from 'react'
import orcaScene from '../assets/3d/killer_whale.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Orca = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(orcaScene);
    const {actions} = useAnimations(animations, ref);
 useEffect(()=>{
    if(isRotating){
        actions['Take 001'].play();
    }else {
        actions['Take 001'].play();
    }
 })
  return (
    <mesh ref={ref} {...props} position={[0,-2,1]} scale={[0.0015,0.0015,0.0015]} rotation={[0, -30, 0]}>
         <primitive object={scene}/>
    </mesh>
  )
}

export default Orca

