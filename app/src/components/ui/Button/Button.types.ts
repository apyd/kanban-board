export type ButtonProps = {
  current?: boolean;
  withStaticStyles?: boolean;
  label?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "ghost";
  Icon?: React.ReactNode;
  rounded?: "full-rounded" | "right-rounded" | "left-rounded" | "no-rounded";
  buttonWithArrow?: boolean;
  buttonCentered?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: Event) => void;
  as?: React.ElementType;
  href?: string;
  form?: string;
};
