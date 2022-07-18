/* eslint-disable no-case-declarations */
import produce from 'immer';

/* eslint-disable no-unused-vars */
export interface CartProduct {
  id: number;
  title: string;
  amount: number;
  price: number;
  urlImage: string;
}

export interface CartState {
  products: CartProduct[];
  total: number;
  totalItems: number;
}

export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART'
}

export interface CartActionProps {
  type: ActionType;
  payload: {
    productId: number;
    amount?: number;
  };
}

function addProduct(
  product: CartProduct,
  amount: number,
  cartState: CartState
): CartState {
  // if (amount <= 0) throw Error('Quantidade adicionada inválida');
  if (product) {
    return produce(cartState, (draft) => {
      const productIndex = draft.products.findIndex(
        (prod) => prod.id === product.id
      );
      if (productIndex >= 0) {
        draft.products[productIndex].amount += amount;
      } else {
        const productToAdd = {
          id: product.id,
          title: product.title,
          amount,
          price: product.price,
          urlImage: product.urlImage
        };
        draft.products.push(productToAdd);
      }
      draft.total += product.price * amount;
      draft.totalItems += amount;
    });
  } else {
    throw Error('Operação inválida');
  }
}

function removeProduct(productId: number, cartState: CartState): CartState {
  return produce(cartState, (draft) => {
    const product = draft.products.find((prod) => prod.id === productId);
    if (!product) {
      throw Error('Não há itens para remover');
    }
    draft.total -= product.amount * product.price;
    draft.totalItems -= product.amount;
    draft.products = draft.products.filter((prod) => prod.id !== productId);
  });
}

function clearCart(cartState: CartState) {
  return produce(cartState, (draft) => {
    draft.products.length = 0;
    draft.total = 0;
    draft.totalItems = 0;
  });
}

export function CartReducer(cartState: CartState, action: any): CartState {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      const { product, amount } = action.payload;
      return addProduct(product, amount, cartState);
    case ActionType.REMOVE_PRODUCT:
      const { productId } = action.payload;
      return removeProduct(productId, cartState);
    case ActionType.CLEAR_CART:
      return clearCart(cartState);
    default:
      return cartState;
  }
}
