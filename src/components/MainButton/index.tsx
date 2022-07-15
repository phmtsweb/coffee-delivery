import { ButtonContainer } from './styles';

import { ButtonHTMLAttributes } from 'react';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function MainButton({ label, ...rest }: MainButtonProps) {
  return <ButtonContainer {...rest}>{label}</ButtonContainer>;
}
