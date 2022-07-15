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
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: string;
  urlImage: string;
}

export function CardCatalog({
  id,
  title,
  description,
  tags,
  price,
  urlImage
}: CardCatalogProps) {
  const [amount, setAmount] = useState(1);
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
            increment={() => setAmount((state) => state + 1)}
            decrement={() => setAmount((state) => state - 1)}
          />
          <CartButton type="product" />
        </ActionsContainer>
      </CardActions>
    </CardContainer>
  );
}
