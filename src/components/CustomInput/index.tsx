import { Info } from 'phosphor-react';
import {
  ComponentPropsWithoutRef,
  forwardRef,
  InputHTMLAttributes
} from 'react';
import { useFormState } from 'react-hook-form';
import {
  CustomInputContainer,
  CustomInputFakeContainer,
  InfoLabel,
  InputContainer,
  TooltipError
} from './styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  optional?: boolean;
  isDisabled?: boolean;
  wasFulfilled?: boolean;
  labelFakeName?: string;
}

type InputProps = ComponentPropsWithoutRef<'input'> & CustomInputProps;

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelFakeName = '',
      optional = false,
      isDisabled = false,
      wasFulfilled = false,
      inputName,
      ...rest
    },
    ref
  ) => {
    const { errors } = useFormState();
    const isValid = !errors[inputName];
    const errorMessage = errors[inputName]?.message as string;
    return !isDisabled ? (
      <InputContainer>
        <CustomInputContainer {...rest} ref={ref} isValid={isValid} />
        {optional && <InfoLabel>Opcional</InfoLabel>}
        {!isValid && (
          <InfoLabel>
            <Info size={18} />
            <TooltipError>{errorMessage}</TooltipError>
          </InfoLabel>
        )}
      </InputContainer>
    ) : (
      <InputContainer>
        <CustomInputFakeContainer isValid={isValid} wasFulfilled={wasFulfilled}>
          {labelFakeName !== '' ? labelFakeName : inputName}
          {optional && <InfoLabel>Opcional</InfoLabel>}
          {!isValid && (
            <InfoLabel>
              <Info size={18} />
              <TooltipError>{errorMessage}</TooltipError>
            </InfoLabel>
          )}
        </CustomInputFakeContainer>
      </InputContainer>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export { CustomInput };
