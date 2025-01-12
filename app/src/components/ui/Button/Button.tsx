import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  label,
  Icon,
  current = false,
  staticBtn = false,
  variant = "primary",
  rounded = "full-rounded",
  onClick,
  as: Component = "button",
  href,
}: ButtonProps) => {
  return (
    <Component
      className={`button button-${variant} button-${rounded} ${
        current && "button-active"
      } ${staticBtn && "button-static"}`}
      onClick={onClick}
      href={href}
    >
      {Icon && <span className="button-icon">{Icon}</span>}
      <span className="button-label">{label}</span>
    </Component>
  );
};

export default Button;
