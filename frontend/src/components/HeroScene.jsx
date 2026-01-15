import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ScrollModel from "./ScrollModel";

const HeroScene = () => {
  return (
    <div className="hero-3d">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Suspense fallback={null}>
          <ScrollModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
