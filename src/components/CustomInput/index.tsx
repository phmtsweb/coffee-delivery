import { InputHTMLAttributes } from 'react';
import { CustomInputContainer, InputContainer } from './styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
}

export function CustomInput({ optional = false, ...rest }: CustomInputProps) {
  return (
    <InputContainer>
      <CustomInputContainer {...rest} />
      {optional && <span>Opcional</span>}
    </InputContainer>
  );
}
