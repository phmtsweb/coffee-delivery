import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatNumberToCurrency } from '../../utils/formatNumberToCurrency';
import { AmountSelect } from '../AmountSelect';
import { RemoveButton } from '../RemoveButton';
import {
  CardCheckoutActions,
  CardCheckoutContainer,
  CardCheckoutDescription,
  CardCheckoutImage,
  CardCheckoutInfo
} from './styles';

interface CardCheckoutProps {
  productId: number;
  urlImage: string;
  title: string;
  amount: number;
  price: number;
}

export function CardCheckout({
  productId,
  urlImage,
  title,
  amount,
  price
}: CardCheckoutProps) {
  const [amountCart, setAmountCart] = useState(amount);
  const { addCart, removeCart } = useCart();

  async function increment() {
    setAmountCart((state) => state + 1);
    await addCart(productId, 1);
  }

  async function decrement() {
    if (amount === 1) {
      setAmountCart(0);
      removeCart(productId);
    } else {
      setAmountCart((state) => state - 1);
      addCart(productId, -1);
    }
  }
  return (
    <CardCheckoutContainer>
      <CardCheckoutImage src={urlImage} alt={title} />
      <CardCheckoutInfo>
        <CardCheckoutDescription>
          <span>{title}</span>
          <strong>R$ {formatNumberToCurrency(price * amount)}</strong>
        </CardCheckoutDescription>
        <CardCheckoutActions>
          <AmountSelect
            amount={amountCart}
            increment={increment}
            decrement={decrement}
          />
          <RemoveButton removeAction={() => removeCart(productId)} />
        </CardCheckoutActions>
      </CardCheckoutInfo>
    </CardCheckoutContainer>
  );
}
