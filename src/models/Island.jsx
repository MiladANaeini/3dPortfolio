/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: cotman sam (https://sketchfab.com/cotman_sam)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/the-mill-485266e0d43e46a7bc7850d3d957571a
Title: The Mill
*/

import React, { useRef , useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber';
import islandScene from '../assets/3d/the_mill.glb'
import {a} from '@react-spring/three';
const Island = ({isRotating, setIsRotating,setCurrentStage, ...props}) => {

    const islandRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(islandScene);
    
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX
    }
    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }
    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;
    
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }
    const handleKeyDown = (e)=>{
        if(e.key === 'ArrowLeft') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
        } else if(e.key === 'ArrowRight') {
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -=0.01 * Math.PI;
        }
    }

    const handleKeyUp = (e)=> {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }


    useFrame(()=>{
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;
            if(Math.abs(rotationSpeed.current)< 0.001){
                rotationSpeed.current = 0;
            }
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;
             /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(2);
        break;
     case normalizedRotation >= 5.6 && normalizedRotation <= 6.2:
          setCurrentStage(1);
          break;
      default:
        setCurrentStage(null);
    }
        }
    })

    useEffect(()=>{
        const canvas = gl.domElement;
    canvas.addEventListener('pointerdown',handlePointerDown);
    canvas.addEventListener('pointerup',handlePointerUp);
    canvas.addEventListener('pointermove',handlePointerMove);
    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('keyup',handleKeyUp);

    return ()=>{
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
    },[gl, handlePointerDown,handlePointerUp,handlePointerMove])


  return (
    <a.group ref={islandRef} {...props} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.028}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.064, 3.417, -9.723]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.078, 1, 1]}
          >
            <mesh
              geometry={nodes["m_House_Material_#81_0"].geometry}
              material={materials.Material_81}
            />
            <mesh
              geometry={nodes["m_House_Material_#158_0"].geometry}
              material={materials.Material_158}
            />
            <mesh
              geometry={nodes["m_House_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
            <mesh
              geometry={nodes["m_House_Material_#1_0"].geometry}
              material={materials.Material_1}
            />
          </group>
          <group
            position={[29.657, 0.295, -27.343]}
            rotation={[-0.873, 0, 0]}
            scale={0.904}
          >
            <mesh
              geometry={nodes["m_Clothline_Material_#26_0"].geometry}
              material={materials.Material_26}
            />
            <mesh
              geometry={nodes["m_Clothline_Material_#166_0"].geometry}
              material={materials.Material_166}
            />
          </group>
          <group position={[52.367, 60.969, 11.288]} rotation={[-1.549, 0, 0]}>
            <mesh
              geometry={nodes["m_Tree_Material_#33_0"].geometry}
              material={materials.Material_33}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#101_0"].geometry}
              material={materials.Material_101}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#102_0"].geometry}
              material={materials.Material_102}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#103_0"].geometry}
              material={materials.Material_103}
            />
            <mesh
              geometry={nodes["m_Tree_Material_#106_0"].geometry}
              material={materials.Material_106}
            />
          </group>
          <group
            position={[-73.696, -11.775, 26.642]}
            rotation={[-Math.PI / 2, 0.087, 0]}
            scale={0.866}
          >
            <mesh
              geometry={nodes["m_Plants_Material_#155_0"].geometry}
              material={materials.Material_155}
              position={[-9.56, 0, 4.661]}
            />
          </group>
          <mesh
            geometry={nodes["m_WoodenBeams_Material_#25_0"].geometry}
            material={materials.Material_25}
            position={[-22.575, 29.742, 18.113]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes["m_Ground_Material_#58_0"].geometry}
            material={materials.Material_58}
            position={[-40.903, -17.009, -29.004]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes["m_Pier_Material_#31_0"].geometry}
            material={materials.Material_31}
            position={[-98.876, -12.23, 8.374]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes["m_StoneLedge_Material_#29_0"].geometry}
            material={materials.Material_29}
            position={[-34.081, -16.034, -19.547]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes["m_Rock_Material_#27_0"].geometry}
            material={materials.Material_27}
            position={[39.816, -9.325, 70.443]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.232}
          />
          <mesh
            geometry={nodes["m_Fence_Material_#59_0"].geometry}
            material={materials.Material_59}
            position={[-35.205, 7.054, -30.543]}
            rotation={[Math.PI, -1.531, Math.PI]}
          />
          <mesh
            geometry={nodes["m_Barrel_Material_#30_0"].geometry}
            material={materials.Material_30}
            position={[-60.779, -11.387, -17.724]}
            rotation={[-1.573, 0.008, 1.833]}
          />
          <mesh
            geometry={nodes["m_Log_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-65.045, -11.186, 47.874]}
            rotation={[-1.552, 0.039, -1.202]}
            scale={1.058}
          />
          <mesh
            geometry={nodes["m_Grass_Material_#109_0"].geometry}
            material={materials.Material_109}
            position={[52.197, 4.327, 72.562]}
            rotation={[-1.578, -1.047, -0.007]}
            scale={1.135}
          />
          <mesh
            geometry={nodes["m_Bricks_Material_#32_0"].geometry}
            material={materials.Material_32}
            position={[-22.575, 29.742, 18.113]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes["m_Water_Material_#152_0"].geometry}
            material={materials.Material_152}
            position={[-9.845, -15.737, 20.867]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </a.group>
  );
}


export default Island;
