import { Minus, Plus } from 'phosphor-react';
import { AmountSelectContainer } from './styles';

interface AmountSelectProps {
  increment: () => void;
  decrement: () => void;
  amount: number;
}

export function AmountSelect({
  amount,
  increment,
  decrement
}: AmountSelectProps) {
  return (
    <AmountSelectContainer>
      <button onClick={decrement}>
        <Minus size={14} />
      </button>
      <span>{amount}</span>
      <button onClick={increment}>
        <Plus size={14} />
      </button>
    </AmountSelectContainer>
  );
}
