export type Input = {
  label?: string;
  id: string;
  type: string;
  minValue?: number;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (index: string) => void;
  value?: string;
  ref?: React.RefObject<HTMLInputElement> | ((el: HTMLInputElement) => void);
};
