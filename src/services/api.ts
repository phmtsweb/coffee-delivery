interface ProductProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  urlImage: string;
}

const BASE_URL = 'http://localhost:3000/cafes';

export async function getProducts(): Promise<ProductProps[]> {
  const result = await fetch(BASE_URL);
  const response: ProductProps[] = await result.json();
  return response;
}

export async function getProductById(
  productId: number
): Promise<ProductProps | undefined> {
  const result = await fetch(`${BASE_URL}/${productId}`);
  const response: ProductProps | undefined = await result.json();
  return response;
}
