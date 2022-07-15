import { useEffect, useState } from 'react';
import { CardCatalog } from '../../../../components/CardCatalog';
import {
  ProductsListContainer,
  ProductsSectionContainer,
  SectionTitle
} from './styles';

interface ProductProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: string;
  urlImage: string;
}

export function ProductsList() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    (async function () {
      const result = await fetch('http://localhost:3000/cafes');
      const response = await result.json();
      setProducts(response);
    })();
  }, []);
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
          />
        ))}
      </ProductsListContainer>
    </ProductsSectionContainer>
  );
}
