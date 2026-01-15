import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./Glasses";

const ScrollModel = () => {
  const modelRef = useRef();
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const currentScroll = Math.min(window.scrollY, maxScroll);
      scrollProgress.current = currentScroll / maxScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
  if (!modelRef.current) return;

  const p = scrollProgress.current;

  modelRef.current.rotation.y = -0.6 + p * 0.6;
  modelRef.current.rotation.x = 0.15 - p * 0.15;

  // nahoru / dolů
  modelRef.current.position.y = -0.6 + p * 1.2;

  // blíž ke kameře
  modelRef.current.position.z = -1.8;
});


  return <Model ref={modelRef} scale={0.1} />;
};

export default ScrollModel;
