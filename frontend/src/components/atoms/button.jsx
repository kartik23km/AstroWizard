const Button = ({ title, className = "", onClick, variant = "primary" }) => {
  const buttonConfig = {
    primary:
      "bg-cosmic-blue text-white border-primary hover:scale-105 hover:duration-300 hover:border-white",
    secondary: "bg-secondary text-white border-secondary",
  };

  return (
    <button
      className={`cursor-pointer border rounded-lg px-4 py-2 ${buttonConfig[variant] || buttonConfig.primary} ${className}`.trim()}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
