/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { ActionType, CartProduct, CartReducer } from '../reducers/cartReducer';
import { getProductById } from '../services/api';

interface CartContextData {
  products: CartProduct[];
  total: number;
  totalItems: number;
  addCart: (productId: number, amount: number) => Promise<void>;
  removeCart: (productId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(
    CartReducer,
    {
      products: [],
      total: 0,
      totalItems: 0
    },
    () => {
      const storedCartJSON = localStorage.getItem('@coffee-delivery:cart');
      if (storedCartJSON) {
        return JSON.parse(storedCartJSON);
      }
      return {
        products: [],
        total: 0,
        totalItems: 0
      };
    }
  );

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

  function cleanCart() {
    dispatch({ type: ActionType.CLEAR_CART });
  }
  useEffect(() => {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('@coffee-delivery:cart', cartJSON);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        products: cart.products,
        total: cart.total,
        totalItems: cart.totalItems,
        addCart,
        removeCart,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
