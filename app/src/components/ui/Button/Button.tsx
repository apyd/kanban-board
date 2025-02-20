import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  label,
  Icon,
  current = false,
  withStaticStyles = false,
  variant = "primary",
  rounded = "full-rounded",
  buttonWithArrow = false,
  onClick,
  as: Component = "button",
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={clsx(
        "button",
        `button-${variant}`,
        `button-${rounded}`,
        { "button-active": current },
        { "button-static": withStaticStyles },
        { "button-dropdown": buttonWithArrow }
      )}
      onClick={onClick}
      {...rest}
    >
      {Icon && <span className="button-icon">{Icon}</span>}
      {label && <span className="button-label">{label}</span>}
    </Component>
  );
};

export default Button;
