import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/glasses.gltf");

  useEffect(() => {
    if (!group.current) return;

    // vycentrování modelu
    const box = new THREE.Box3().setFromObject(group.current);
    const center = box.getCenter(new THREE.Vector3());

    group.current.position.sub(center);
  }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={0.15}>
      <mesh geometry={nodes.Object_1_Plastic_0.geometry} material={materials.Plastic} />
      <mesh geometry={nodes.Object_2_Plastic_0.geometry} material={materials.Plastic} />
      <mesh geometry={nodes.Object_3_Plastic_0.geometry} material={materials.Plastic} />
      <mesh geometry={nodes.Object_4_Glass_0.geometry} material={materials.Glass} />
      <mesh geometry={nodes.Object_5_Glass_0.geometry} material={materials.Glass} />
    </group>
  );
}

useGLTF.preload("/glasses.gltf");
