import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import HeroScene from "../components/HeroScene";

const Home = ({ visible, lang, toggleLang }) => {
  return (
    <div className={`home ${visible ? "page-visible" : ""}`}>
      <Navbar lang={lang} toggleLang={toggleLang} />

      <div className="hero-layout">
        <HeroText lang={lang} />
        <HeroScene />
      </div>
    </div>
  );
};

export default Home;
