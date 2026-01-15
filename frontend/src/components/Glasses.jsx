import React, { forwardRef, useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Glasses = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/glasses.gltf");

  useEffect(() => {
    if (!group.current) return;

    // vycentrování modelu (jen jednou)
    const box = new THREE.Box3().setFromObject(group.current);
    const center = box.getCenter(new THREE.Vector3());
    group.current.position.sub(center);
  }, []);

  return (
    <group ref={ref || group} {...props} dispose={null}>
      <group scale={1}>
        <mesh geometry={nodes.Object_1_Plastic_0.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_2_Plastic_0.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_3_Plastic_0.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_4_Glass_0.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_5_Glass_0.geometry} material={materials.Glass} />
      </group>
    </group>
  );
});

export default Glasses;

useGLTF.preload("/glasses.gltf");
