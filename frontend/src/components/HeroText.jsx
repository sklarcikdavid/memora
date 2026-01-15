const HeroText = ({ lang }) => {
  const text = {
    cz: {
      title: "MEMORA",
      subtitle: "Když technologie pomáhá vzpomínkám zůstat naživu",
    },
    en: {
      title: "MEMORA",
      subtitle: "When technology helps memories stay alive",
    },
  };

  return (
    <div className="hero-text">
      <h1>{text[lang].title}</h1>
      <p>{text[lang].subtitle}</p>
    </div>
  );
};

export default HeroText;
