import produce from 'immer';

/* eslint-disable no-unused-vars */
export interface CartProduct {
  id: number;
  title: string;
  amount: number;
  price: number;
  imageURL: string;
}

export interface CartState {
  products: CartProduct[];
  total: number;
  totalItems: number;
}

export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export interface CartActionProps {
  type: ActionType;
  payload: CartProduct;
}

export function CartReducer(
  cartState: CartState,
  action: CartActionProps
): CartState {
  const { payload: product } = action;
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return produce(cartState, (draft) => {
        const productIndex = draft.products.findIndex(
          (prod) => prod.id === product.id
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount += product.amount;
        } else {
          draft.products.push(product);
        }
        draft.total += product.amount * product.price;
        draft.totalItems += product.amount;
      });
    case ActionType.REMOVE_PRODUCT:
      return produce(cartState, (draft) => {
        draft.products.filter((prod) => prod.id !== product.id);
        draft.total -= product.amount * product.price;
        draft.totalItems -= product.amount;
      });
    default:
      return cartState;
  }
}
