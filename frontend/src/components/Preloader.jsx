import "./Preloader.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const startZoom = setTimeout(() => setZoom(true), 1000);
    const finish = setTimeout(onFinish, 2800);

    return () => {
      clearTimeout(startZoom);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: zoom ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        className="logo"
        initial={{ scale: 1 }}
        animate={{ scale: zoom ? 25 : 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        MEMORA
      </motion.h1>
    </motion.div>
  );
}
