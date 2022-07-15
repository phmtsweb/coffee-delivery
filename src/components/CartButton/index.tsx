import { ShoppingCartSimple } from 'phosphor-react';
import { CartButtonBadge, CartButtonContainer } from './styles';

interface CartButtonProps {
  type: 'product' | 'cart';
  amount?: number;
  actionCart: () => void;
}

export function CartButton({ type, amount = 0, actionCart }: CartButtonProps) {
  return (
    <CartButtonContainer type={type} onClick={actionCart}>
      <ShoppingCartSimple size={18} />
      {amount !== 0 && <CartButtonBadge>{amount}</CartButtonBadge>}
    </CartButtonContainer>
  );
}
