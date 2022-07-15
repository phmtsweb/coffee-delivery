/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useReducer } from 'react';
import { ActionType, CartProduct, CartReducer } from '../reducers/cartReducer';

interface CartContextData {
  products: CartProduct[];
  total: number;
  totalItems: number;
  addCart: (product: CartProduct) => void;
  removeCart: (product: CartProduct) => void;
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

  function addCart(product: CartProduct): void {
    dispatch({ type: ActionType.ADD_PRODUCT, payload: product });
  }
  function removeCart(product: CartProduct): void {
    dispatch({ type: ActionType.REMOVE_PRODUCT, payload: product });
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
