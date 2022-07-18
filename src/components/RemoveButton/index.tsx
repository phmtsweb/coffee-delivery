import { Trash } from 'phosphor-react';
import { RemoveButtonContainer } from './styles';

interface RemoveButtonProps {
  removeAction: () => void;
}

export function RemoveButton({ removeAction }: RemoveButtonProps) {
  return (
    <RemoveButtonContainer onClick={removeAction}>
      <Trash size={16} />
      <span>REMOVER</span>
    </RemoveButtonContainer>
  );
}
