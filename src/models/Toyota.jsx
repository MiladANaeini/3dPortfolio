

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3d/toyota_corolla.glb'
const Toyota = ({currentAnimation,...props}) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    console.log(actions)
   actions.Animation.paused = false
   actions['Animation'].play();
   if(actions[currentAnimation]){

   }
  },[actions, currentAnimation])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.001, 0.01, -0.017]}
          rotation={[-1.556, 0, 0]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="_Car_Chassis_0"
                position={[0.108, 1.089, -0.13]}
                rotation={[0.031, 0.013, -0.026]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.EMISSION_Light_Fog_Material}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.EMISSION_Light_Brake_Material}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Car_Window_Material}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.EMISSION_Light_Reverse_Material}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.JUST_BLACK_Material}
                />
              </group>
              <group name="Bumper_Front_1" position={[0.126, 1.092, -0.143]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.EMISSION_Light_Fog_Material}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.JUST_BLACK_Material}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group name="Bumper_Rear_2" position={[0.126, 1.092, -0.143]}>
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group name="Wheel_Arches_3" position={[0.126, 1.092, -0.143]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.JUST_BLACK_Material}
                />
              </group>
              <group name="Headlights_Popup_6" position={[0.145, 0.916, 1.517]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.EMISSION_Headlight__Material}
                />
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group
                name="Light_Rear_Plate_7"
                position={[0.126, 1.092, -0.143]}
              >
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.EMISSION_Light_Fog_Material}
                />
              </group>
              <group name="Lights_Fog_8" position={[0.126, 1.092, -0.143]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.Emission_Yellow_Material}
                />
              </group>
              <group name="Side_Mirrors_9" position={[0.126, 1.092, -0.143]}>
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Car_Window_Material}
                />
              </group>
              <group name="Plate_Rear_10" position={[0.1, 1.137, -2.148]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
              </group>
              <group
                name="Plate_Front_11"
                position={[0.107, 0.789, 1.945]}
                rotation={[-0.03, -0.002, 0.078]}
              >
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
              </group>
              <group name="Wipers_12" position={[0.123, 1.061, -0.294]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
              </group>
              <group name="Step_Rail_13" position={[0.156, 0.478, -0.162]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
              </group>
              <group name="Thruster_Base_14" position={[0.121, 0.633, -0.177]}>
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group name="Thruster_Chunk_15" position={[0.112, 0.516, -0.051]}>
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.Exhaust_Material}
                />
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group name="Exhaust_16" position={[0.504, 0.684, -2.011]}>
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.Exhaust_Material}
                />
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.JUST_BLACK_Material}
                />
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group
                name="Exhaust_Flame_17"
                position={[0.499, 0.687, -2.273]}
                scale={[0.992, 0.975, 0.877]}
              >
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.EMISSION_Exhaust_Flame}
                />
              </group>
              <group
                name="Logo_APEX_Twin_Cam_16_18"
                position={[0.661, 1.335, -2.104]}
                rotation={[0.226, 0, 0]}
              >
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.LOGO_APEX_Twin_Cam_16_Material}
                />
              </group>
              <group name="Logo_PLATE001_19" position={[0.155, 0.636, 1.958]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.LOGO_PLATE__Material}
                />
              </group>
              <group name="Logo_PLATE_20" position={[0.1, 1.137, -2.153]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.LOGO_PLATE__Material}
                />
              </group>
              <group name="Logo_TOYOTA_21" position={[0.099, 1.232, -2.148]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.LOGO_TOYOTA__Material}
                />
              </group>
              <group name="Logo_TRUENO_22" position={[-0.448, 1.371, -2.083]}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.LOGO_TRUENO_Material}
                />
              </group>
              <group name="Logo_TRUENO_FILL_23" position={[0.15, 0.826, 1.936]}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.LOGO__TRUENO_FILL_Emission_Material}
                />
              </group>
              <group
                name="Logo_Fujiwara_Tofu_Shop_Logo_24"
                position={[-0.726, 1.156, 0.041]}
              >
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.LOGO_Fujiwara_Tofu_Shop__Material}
                />
              </group>
              <group
                name="Luggage_Bag_Fat_25"
                position={[0.322, 2.053, -0.478]}
              >
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.Luggage_Light__Material}
                />
              </group>
              <group
                name="Luggage_Rectangle_01004_26"
                position={[0.493, 2.106, -0.584]}
              >
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.Luggage_Medium__Material}
                />
              </group>
              <group
                name="Luggage_Rectangle_01003_27"
                position={[0.152, 1.905, -0.461]}
              >
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.Luggage_Dark__Material}
                />
              </group>
              <group
                name="Luugage_Tool_Box_01003_28"
                position={[-0.106, 1.835, -0.093]}
              >
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.Luggage_Darkest__Material}
                />
              </group>
              <group
                name="Luugage_Tool_Box_01002_29"
                position={[0.477, 1.852, -0.573]}
              >
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.Luggage_Dark__Material}
                />
              </group>
              <group name="Rack_Bar_30" position={[0.146, 1.849, -0.12]}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
              </group>
              <group
                name="Car_Wires002_31"
                position={[0.116, 0.466, -0.018]}
                rotation={[-0.011, -0.001, 0.08]}
              >
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials["Wire_Color_Material.001"]}
                />
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials["Wire_Color_Material.002"]}
                />
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials["Wire_Color_Material.004"]}
                />
              </group>
              <group
                name="Car_Wires001_32"
                position={[0.116, 0.466, -0.018]}
                rotation={[-0.052, 0.003, -0.054]}
              >
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials["Wire_Color_Material.003"]}
                />
              </group>
              <group
                name="Luggage_Fat_Bag_Front_Tiedown_33"
                position={[0.259, 1.918, -0.057]}
                rotation={[-0.097, 0.051, 0.019]}
              >
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Luggage_Light__Material}
                />
              </group>
              <group
                name="Luggage_Fat_Bag_Rear_Tiedown_34"
                position={[0.314, 2.032, -1.004]}
                rotation={[0.003, 0.052, 0.014]}
              >
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.Luggage_Light__Material}
                />
              </group>
              <group
                name="Luggage_Rectangle_01000_35"
                position={[0.493, 2.106, -0.584]}
              >
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.Luggage_Medium__Material}
                />
              </group>
              <group name="Spare_Wheel_36" position={[-0.106, 2.151, -0.576]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.Wheel_Bronze_Material}
                />
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials.Wheel_Lug_Material}
                />
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.JUST_BLACK_Material}
                />
                <mesh
                  name="Object_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  material={materials.Wheel_Tire_Material}
                />
              </group>
              <group name="Rope_Back_37" position={[-0.344, 1.964, -0.749]}>
                <mesh
                  name="Object_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials.Luggage_Strap__Material}
                />
              </group>
              <group name="Rope_38" position={[-0.344, 1.964, -0.749]}>
                <mesh
                  name="Object_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials.Luggage_Strap__Material}
                />
              </group>
              <group
                name="Car_Thruster_FL001_39"
                position={[0.774, 0.534, 1.154]}
                rotation={[-0.014, -0.005, 0.004]}
              >
                <mesh
                  name="Object_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.Thrusters_Black_Material}
                />
                <mesh
                  name="Object_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
              </group>
              <group
                name="Car_Thruster_FR001_40"
                position={[-0.46, 0.566, 1.135]}
                rotation={[-0.014, -0.005, 0.004]}
              >
                <mesh
                  name="Object_125"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
                <mesh
                  name="Object_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.Thrusters_Black_Material}
                />
                <mesh
                  name="Object_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_131"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.Car_Main_White_Material}
                />
              </group>
              <group
                name="Car_Thruster_RL001_41"
                position={[0.804, 0.655, -1.348]}
                rotation={[0.004, 0.002, -0.009]}
              >
                <mesh
                  name="Object_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.Thrusters_Black_Material}
                />
                <mesh
                  name="Object_139"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_139.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
              </group>
              <group
                name="Car_Thruster_RR001_42"
                position={[-0.579, 0.689, -1.33]}
                rotation={[0.004, 0.002, -0.009]}
              >
                <mesh
                  name="Object_141"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141.geometry}
                  material={materials.Car_Main_White_Material}
                />
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.Thrusters_Metal_Material}
                />
                <mesh
                  name="Object_143"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.SCRATCH_Rust_Material}
                />
                <mesh
                  name="Object_145"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_145.geometry}
                  material={materials.Thrusters_Black_Material}
                />
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.Car_Black_Trim_Material}
                />
                <mesh
                  name="Object_147"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_147.geometry}
                  material={materials.SCRATCH_Metal_Material}
                />
              </group>
              <group
                name="Car_Thruster_Flame_FL001_43"
                position={[0.928, 0.347, 1.15]}
                scale={[0.95, 0.241, 1]}
              >
                <mesh
                  name="Object_149"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
              </group>
              <group
                name="Car_Thruster_Flame_RL001_44"
                position={[0.95, 0.474, -1.356]}
                scale={[1, 1.249, 1]}
              >
                <mesh
                  name="Object_151"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_151.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
              </group>
              <group
                name="Car_Thruster_Flame_FR001_45"
                position={[-0.622, 0.386, 1.133]}
                rotation={[-0.024, 0.005, -0.004]}
                scale={[1, 1.149, 1]}
              >
                <mesh
                  name="Object_153"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_153.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
              </group>
              <group
                name="Car_Thruster_Flame_RR001_46"
                position={[-0.737, 0.518, -1.334]}
                scale={[1, 0.644, 1]}
              >
                <mesh
                  name="Object_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials.EMISSION_Thrusters_Fire_Material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Toyota