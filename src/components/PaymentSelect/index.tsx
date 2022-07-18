import { Bank, CreditCard, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import {
  CustomRadioButton,
  LabelButton,
  PaymentSelectContainer
} from './styles';

interface PaymentSelectProps {
  inputName: string;
}

export function PaymentSelect({ inputName }: PaymentSelectProps) {
  const { register } = useFormContext();
  return (
    <PaymentSelectContainer>
      <div>
        <CustomRadioButton
          id="credit-card"
          {...register(inputName)}
          value="cc"
        />
        <LabelButton htmlFor="credit-card">
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </LabelButton>
      </div>
      <div>
        <CustomRadioButton
          id="debit-card"
          {...register(inputName)}
          value="cd"
        />
        <LabelButton htmlFor="debit-card">
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </LabelButton>
      </div>
      <div>
        <CustomRadioButton id="money" {...register(inputName)} value="di" />
        <LabelButton htmlFor="money">
          <Money size={16} />
          <span>DINHEIRO</span>
        </LabelButton>
      </div>
    </PaymentSelectContainer>
  );
}
