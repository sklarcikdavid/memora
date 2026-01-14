import "./button.css";

const Button = ({ children, onClick, className = "app-button" }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
