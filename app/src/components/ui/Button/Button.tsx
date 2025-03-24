import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button = ({
  label,
  Icon,
  current = false,
  withStaticStyles = false,
  variant = "primary",
  rounded = "full-rounded",
  buttonWithArrow = false,
  buttonCentered = false,
  onClick,
  as: Component = "button",
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={clsx(
        styles["button"],
        styles[`button-${variant}`],
        styles[`button-${rounded}`],
        { [styles["button-active"]]: current },
        { [styles["button-static"]]: withStaticStyles },
        { [styles["button-dropdown"]]: buttonWithArrow },
        { [styles["button-centered"]]: buttonCentered }
      )}
      onClick={onClick}
      {...rest}
    >
      {Icon && <span className={styles["button-icon"]}>{Icon}</span>}
      {label && <span className={styles["button-label"]}>{label}</span>}
    </Component>
  );
};

export default Button;
