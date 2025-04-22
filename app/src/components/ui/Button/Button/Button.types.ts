import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined" | "ghost";
  align?: "left" | "right" | "center";
  color?: "primary" | "secondary" | "error" | "success";
  rounded?: "full-rounded" | "right-rounded" | "left-rounded" | "no-rounded";
  width?: "full-width" | "max-content";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  form?: string;
};
