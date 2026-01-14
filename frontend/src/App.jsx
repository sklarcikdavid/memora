import { useState, useEffect, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import Preloader from "./components/Preloader";
import AddPerson from "./components/AddPerson";
import Button from "./components/button";
import LangButton from "./components/LangButton";
import Model from "./components/Glasses.jsx";

const Home = ({ visible, lang, toggleLang }) => {
  const text = {
    cz: {
      title: "MEMORA",
    },
    en: {
      title: "MEMORA",
    },
  };

  return (
    <div className={`home ${visible ? "page-visible" : ""}`}>
      <Link to="/admin" className="admin-link">
        <Button>ADMIN</Button>
      </Link>

      <div style={{ position: "fixed", top: "24px", right: "140px", zIndex: 10 }}>
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>

      <div className="hero-layout">
        <div className="hero-text">
          <h1>{text[lang].title}</h1>
        </div>

        <div className="hero-3d">
          <Canvas camera={{ position: [0, 0, 2.5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />

            <Suspense fallback={null}>
              
<Model scale={0.1} rotation={[0, -0.25, 0]} />

            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);
  const [lang, setLang] = useState("cz");

  const toggleLang = () => {
    setLang((prev) => (prev === "cz" ? "en" : "cz"));
  };

  useEffect(() => {
    if (!showIntro) {
      setTimeout(() => setPageVisible(true), 200);
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && <Preloader onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <Routes>
          <Route
            path="/"
            element={<Home visible={pageVisible} lang={lang} toggleLang={toggleLang} />}
          />
          <Route path="/admin" element={<AddPerson />} />
        </Routes>
      )}
    </>
  );
};

export default App;
