import { useEffect, useState } from 'react';
import { CardCatalog } from '../../../../components/CardCatalog';
import { useCart } from '../../../../hooks/useCart';
import {
  ProductsListContainer,
  ProductsSectionContainer,
  SectionTitle
} from './styles';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  urlImage: string;
}

export function ProductsList() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addCart } = useCart();
  useEffect(() => {
    (async function () {
      const result = await fetch('http://localhost:3000/cafes');
      const response = await result.json();
      setProducts(response);
    })();
  }, [setProducts]);
  return (
    <ProductsSectionContainer>
      <SectionTitle>Nossos cafés</SectionTitle>
      <ProductsListContainer>
        {products.map((product) => (
          <CardCatalog
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            tags={product.tags}
            price={product.price}
            urlImage={product.urlImage}
            addCart={addCart}
          />
        ))}
      </ProductsListContainer>
    </ProductsSectionContainer>
  );
}
