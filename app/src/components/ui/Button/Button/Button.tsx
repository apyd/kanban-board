import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button = ({
  children,
  active = false,
  variant = "text",
  align = "center",
  color = "primary",
  rounded = "full-rounded",
  width = "full-width",
  onClick,
  ...rest
}: ButtonProps) => {
  const Component = rest.href ? "a" : "button";
  return (
    <Component
      className={clsx(
        styles["button"],
        styles[`button-${variant}`],
        styles[`button-${rounded}`],
        styles[`button-${align}`],
        styles[`button-${color}`],

        { [styles["button-narrow"]]: width === "max-content" },
        { [styles["button-active"]]: active }
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
