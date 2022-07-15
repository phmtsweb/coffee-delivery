import { ShoppingCartSimple } from 'phosphor-react';
import { CarButtonBadge, CarButtonContainer } from './styles';

interface CarButtonProps {
  type: 'product' | 'cart';
  amount?: number;
}

export function CarButton({ type, amount = 0 }: CarButtonProps) {
  return (
    <CarButtonContainer type={type}>
      <ShoppingCartSimple size={18} />
      {amount !== 0 && <CarButtonBadge>{amount}</CarButtonBadge>}
    </CarButtonContainer>
  );
}
