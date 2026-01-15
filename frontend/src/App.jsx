import { useState, useEffect, Suspense, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";


import Preloader from "./components/Preloader";
import AdminPanel from "./components/AdminPanel";
import Button from "./components/button";
import LangButton from "./components/LangButton";

/* ===== HOME ===== */

const Home = ({ visible, lang, toggleLang }) => {
  const text = {
    cz: { title: "MEMORA" },
    en: { title: "MEMORA" },
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
        {/* TEXT */}
        <div className="hero-text">
          <h1>{text[lang].title}</h1>
        </div>

        {/* MÍSTO PRO 3D MODEL (zatím prázdné) */}
        <div className="hero-3d">
          {/* tady později vrátíš Canvas */}
        </div>
      </div>
    </div>
  );
};

/* ===== APP ===== */

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);
  const [lang, setLang] = useState("cz");

  const toggleLang = () => {
    setLang((prev) => (prev === "cz" ? "en" : "cz"));
  };

  useEffect(() => {
    if (!showIntro) {
      setPageVisible(true);
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && <Preloader onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                visible={pageVisible}
                lang={lang}
                toggleLang={toggleLang}
              />
            }
          />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      )}
    </>
  );
};

export default App;