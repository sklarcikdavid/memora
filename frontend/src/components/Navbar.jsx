import { Link } from "react-router-dom";
import Button from "./button";
import LangButton from "./LangButton";

const Navbar = ({ lang, toggleLang }) => {
  return (
    <>
      <Link to="/admin" className="admin-link">
        <Button>ADMIN</Button>
      </Link>

      <div className="lang-switch">
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>
    </>
  );
};

export default Navbar;
