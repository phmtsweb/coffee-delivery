import { useCart } from '../../hooks/useCart';
import { formatNumberToCurrency } from '../../utils/formatNumberToCurrency';
import { ResumeContainer, ResumeSubItem, ResumeTotal } from './styles';

export function ResumeCheckout() {
  const { total } = useCart();
  return (
    <ResumeContainer>
      <ResumeSubItem>
        <span>Total de itens</span>
        <span>R$ {formatNumberToCurrency(total)}</span>
      </ResumeSubItem>
      <ResumeSubItem>
        <span>Entrega</span>
        <span>R$ {formatNumberToCurrency(3.5)}</span>
      </ResumeSubItem>
      <ResumeTotal>
        <span>Total</span>
        <span>R$ {formatNumberToCurrency(total + 3.5)}</span>
      </ResumeTotal>
    </ResumeContainer>
  );
}
