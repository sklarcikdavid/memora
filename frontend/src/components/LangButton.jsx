import "./LangButton.css";

export default function LangButton({ lang, toggleLang }) {
  return (
    <button className="lang-btn" onClick={toggleLang}>
      {lang === "cz" ? "EN" : "CZ"}
    </button>
  );
}
