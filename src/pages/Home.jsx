import React, {Suspense, useState, useEffect,useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
// import { Sky } from '@react-three/drei'
import  Sky  from '../models/Sky'
import Orca from '../models/Orca'
import Baloon from '../models/Baloon'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import ocean from '../assets/ocean.mp3'
import { soundoff, soundon } from '../assets/icons'
const Home = () => {
  const audioRef = useRef(new Audio(ocean));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(()=>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return ()=> {
      audioRef.current.pause();
    }
  },[isPlayingMusic])

   const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -1.5];
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale,screenPosition,rotation];
   }
   const adjustBallonForScreenSize = () => {
    let screenScale ;
    let screenPosition = [0, -20, -1.5];

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
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
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
         <Bird isRotating={isRotating}/>
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
      <div className='absolute bottom-2 and right-2'>
        <img src={isPlayingMusic ? soundoff : soundon}
        alt='sound'
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      </section>
  )
}

export default Home