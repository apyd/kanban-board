import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  label,
  Icon,
  current = false,
  withStaticStyles = false,
  variant = "primary",
  rounded = "full-rounded",
  onClick,
  as: Component = "button",
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={`button button-${variant} button-${rounded} ${
        current && "button-active"
      } ${withStaticStyles && "button-static"}`}
      onClick={onClick}
      {...rest}
    >
      {Icon && <span className="button-icon">{Icon}</span>}
      {label && <span className="button-label">{label}</span>}
    </Component>
  );
};

export default Button;
