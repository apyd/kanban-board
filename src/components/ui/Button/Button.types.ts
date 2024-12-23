import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
}