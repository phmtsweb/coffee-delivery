import axios from 'axios';

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

export async function createOrder(order: any): Promise<number> {
  const response = await axios.post(`http://localhost:3000/orders`, order);
  const { id } = response.data;
  const myOrdersJSON = localStorage.getItem('@coffee-delivery:orders');
  const myOrders = myOrdersJSON ? JSON.parse(myOrdersJSON) : [];
  myOrders.unshift(id);
  return id as number;
}

export async function getOrderById(orderId: number): Promise<any> {
  const response = await axios.get(`http://localhost:3000/orders/${orderId}`);
  const order = response.data;
  return order;
}
