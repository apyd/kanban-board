export type ButtonProps = {
  current?: boolean;
  withStaticStyles?: boolean;
  label?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "destructive";
  Icon?: React.ReactNode;
  rounded?: "full-rounded" | "right-rounded" | "left-rounded";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
};
