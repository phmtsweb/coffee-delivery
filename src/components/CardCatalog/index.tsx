import { useState } from 'react';
import { AmountSelect } from '../AmountSelect';
import { CartButton } from '../CartButton';
import { Tags } from '../Tags';
import {
  ActionsContainer,
  CardActions,
  CardContainer,
  CardImage,
  Description,
  PriceContainer,
  Title
} from './styles';

interface CardCatalogProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: string;
  urlImage: string;
  addCart: (productId: number, amount: number) => void;
}

export function CardCatalog({
  id,
  title,
  description,
  tags,
  price,
  urlImage,
  addCart
}: CardCatalogProps) {
  const [amount, setAmount] = useState(1);

  function increment() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  function decrement() {
    setAmount((prevAmount) => {
      if (prevAmount <= 0) {
        return 0;
      } else {
        return prevAmount - 1;
      }
    });
  }

  return (
    <CardContainer>
      <CardImage src={urlImage} alt={title} />
      <Tags tags={tags} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CardActions>
        <PriceContainer>
          <span>R$</span>
          <strong>{price}</strong>
        </PriceContainer>
        <ActionsContainer>
          <AmountSelect
            amount={amount}
            increment={increment}
            decrement={decrement}
          />
          <CartButton type="product" actionCart={() => addCart(id, amount)} />
        </ActionsContainer>
      </CardActions>
    </CardContainer>
  );
}
