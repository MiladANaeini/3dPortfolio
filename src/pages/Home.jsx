import React, {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
// import { Sky } from '@react-three/drei'
import  Sky  from '../models/Sky'
import Orca from '../models/Orca'
import Baloon from '../models/Baloon'
import Bird from '../models/Bird'

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
   const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -1];
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale,screenPosition,rotation];
   }
   const adjustBallonForScreenSize = () => {
    let screenScale ,screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [.5, .5, .5];
    }
    return [screenScale,screenPosition];
   }
   const adjustOrcaForScreenSize = () => {
    let screenScale ,screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [.5, .5, .5];
    }
    return [screenScale,screenPosition];
   }

   const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
   const [BaloonScale, BaloonPosition] = adjustBallonForScreenSize();
   const [OrcaScale, OrcaPosition] = adjustOrcaForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}
      <Canvas
       className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
       camera={{near:0.1, far:1000}}
       >
        <Suspense fallback={<Loader/>}>
         <directionalLight/>
         <ambientLight/>
         <pointLight/>
         <spotLight/>
         <hemisphereLight/>
         <Bird/>
         <Sky isRotating={isRotating}/>
         <Island
         position={islandPosition}
         scale={islandScale}
         rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating = {setIsRotating}
        setCurrentStage={setCurrentStage}
        />
        <Baloon
        isRotating={isRotating}
        BaloonScale={BaloonScale}
        BaloonPosition={BaloonPosition}
        />
        <Orca
        isRotating={isRotating}
        OrcaScale={OrcaScale}
        OrcaPosition={OrcaPosition}
        />
        </Suspense>

      </Canvas>
      </section>
  )
}

export default Home