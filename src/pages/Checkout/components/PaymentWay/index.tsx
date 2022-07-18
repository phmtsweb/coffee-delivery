import { CurrencyDollar, Info } from 'phosphor-react';
import { useFormState } from 'react-hook-form';
import { PaymentSelect } from '../../../../components/PaymentSelect';
import {
  InfoError,
  PaymentWayContainer,
  PaymentWayDescription,
  PaymentWayTextContainer,
  TooltipError
} from './styles';

export function PaymentWay() {
  const { errors } = useFormState();
  const isValid = !errors.paymentType;
  const errorMessage = errors.paymentType?.message as string;
  return (
    <PaymentWayContainer>
      <PaymentWayDescription>
        <CurrencyDollar size={22} />
        <PaymentWayTextContainer>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma como deseja pagar
          </span>
        </PaymentWayTextContainer>
      </PaymentWayDescription>
      <PaymentSelect inputName="paymentType" />
      {!isValid && (
        <InfoError>
          <Info size={18} />
          <TooltipError>{errorMessage}</TooltipError>
        </InfoError>
      )}
    </PaymentWayContainer>
  );
}
