import { formatAmount } from '../../utils/formatAmount';
import { formatNumberToCurrency } from '../../utils/formatNumberToCurrency';
import { CardToastContainer, CardToastImage, CardToastInfo } from './styles';

interface CardToastProps {
  urlImage: string;
  title: string;
  amount: number;
  price: number;
}

export function CardToast({ urlImage, title, amount, price }: CardToastProps) {
  return (
    <CardToastContainer>
      <CardToastImage src={urlImage} alt={title} />
      <CardToastInfo>
        <span>{title}</span>
        <div>
          <span>{formatAmount(amount)}</span>
          <strong>R${formatNumberToCurrency(price * amount)}</strong>
        </div>
      </CardToastInfo>
    </CardToastContainer>
  );
}
