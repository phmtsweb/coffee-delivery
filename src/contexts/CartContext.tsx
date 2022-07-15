/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useReducer } from 'react';
import { ActionType, CartProduct, CartReducer } from '../reducers/cartReducer';
import { getProductById } from '../services/api';

interface CartContextData {
  products: CartProduct[];
  total: number;
  totalItems: number;
  addCart: (productId: number, amount: number) => void;
  removeCart: (productId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(CartReducer, {
    products: [],
    total: 0,
    totalItems: 0
  });

  async function addCart(productId: number, amount: number): Promise<void> {
    const product = await getProductById(productId);
    if (product)
      dispatch({
        type: ActionType.ADD_PRODUCT,
        payload: {
          product,
          amount
        }
      });
  }
  function removeCart(productId: number): void {
    dispatch({ type: ActionType.REMOVE_PRODUCT, payload: { productId } });
  }

  return (
    <CartContext.Provider
      value={{
        products: cart.products,
        total: cart.total,
        totalItems: cart.totalItems,
        addCart,
        removeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
