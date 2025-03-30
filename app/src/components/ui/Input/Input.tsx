import type { Input } from "./Input.types";
import styles from "./Input.module.scss";

const Input = ({
  label,
  id,
  type,
  minValue,
  placeholder,
  value,
  ref,

  onChange,
}: Input) => {
  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["label"]} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles["input"]}
        type={type}
        id={id}
        min={minValue}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={ref}
      />
    </div>
  );
};

export default Input;
