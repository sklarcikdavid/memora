import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ScrollModel from "./ScrollModel";

const Scene = () => {
  return (
    <div className="w-full h-dvh bg-black">
      <Canvas
        camera={{ position: [0, 0, 15]}}
        onCreated={({ gl }) => gl.setClearColor("#000000")}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Suspense fallback={null}>
          <ScrollModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
