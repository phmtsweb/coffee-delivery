import { ShoppingCartSimple } from 'phosphor-react';
import { CartButtonBadge, CartButtonContainer } from './styles';

interface CartButtonProps {
  type: 'product' | 'cart';
  amount?: number;
}

export function CartButton({ type, amount = 0 }: CartButtonProps) {
  return (
    <CartButtonContainer type={type}>
      <ShoppingCartSimple size={18} />
      {amount !== 0 && <CartButtonBadge>{amount}</CartButtonBadge>}
    </CartButtonContainer>
  );
}
