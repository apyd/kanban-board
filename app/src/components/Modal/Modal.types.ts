import { ComponentProps } from "react";

export type ModalProps = ComponentProps<"dialog"> & {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
  portal?: boolean;
};
