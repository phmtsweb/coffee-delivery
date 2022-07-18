import { useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { formatNumberToCurrency } from '../../utils/formatNumberToCurrency';
import { AmountSelect } from '../AmountSelect';
import { CardToast } from '../CardToast';
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
  price: number;
  urlImage: string;
  addCart: (productId: number, amount: number) => Promise<void>;
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

  const { toast } = useToast();
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

  async function handleAddCart() {
    await addCart(id, amount);
    toast(
      <CardToast
        urlImage={urlImage}
        title={title}
        amount={amount}
        price={price}
      />
    );
    setAmount(1);
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
          <strong>{formatNumberToCurrency(price)}</strong>
        </PriceContainer>
        <ActionsContainer>
          <AmountSelect
            amount={amount}
            increment={increment}
            decrement={decrement}
          />
          <CartButton type="product" actionCart={async () => handleAddCart()} />
        </ActionsContainer>
      </CardActions>
    </CardContainer>
  );
}
