import { Bank, CreditCard, Money } from 'phosphor-react';
import {
  CustomRadioButton,
  LabelButton,
  PaymentSelectContainer
} from './styles';

export function PaymentSelect() {
  return (
    <PaymentSelectContainer>
      <div>
        <CustomRadioButton id="credit-card" name="payment-type" />
        <LabelButton htmlFor="credit-card">
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </LabelButton>
      </div>
      <div>
        <CustomRadioButton id="debit-card" name="payment-type" />
        <LabelButton htmlFor="debit-card">
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </LabelButton>
      </div>
      <div>
        <CustomRadioButton id="money" name="payment-type" />
        <LabelButton htmlFor="money">
          <Money size={16} />
          <span>DINHEIRO</span>
        </LabelButton>
      </div>
    </PaymentSelectContainer>
  );
}
