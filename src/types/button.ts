import type { ReactNode } from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};
