import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

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
          <Route path="/admin" element={<Admin />} />
        </Routes>
      )}
    </>
  );
};

export default App;
