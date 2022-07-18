import { ButtonContainer } from './styles';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | ReactNode;
}

export function MainButton({ label, ...rest }: MainButtonProps) {
  return <ButtonContainer {...rest}>{label}</ButtonContainer>;
}
