import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
} from "../actions/cartActions";
import { v4 as uuidv4 } from "uuid";

const initState = {
  cartItems: [],
};

const cartReducer = (state = initState, action) => {
  const cartItems = state.cartItems;

  const data = action.payload;
  //ajout d'un produit au panier
  if (action.type == ADD_TO_CART) {
    //on récupere le produit à ajouter

    // on verifie si ce produit n'est pas deja ajouté
    const cartItem = cartItems.filter(
      (item) => item.product.id == data.product.id
    )[0];

    //dans le cas ou il ne trouve pas le produit
    if (cartItem === undefined) {
      //on ajoute le nouveau produit au tableau contenant les articles
      const newCartItems = cartItems.concat({
        product: data.product,
        quantity: data.quantity ? data.quantity : 1,
        selectedProductColor: data.selectedProductColor,
        selectedProductSize: data.selectedProductSize,
        cartItemId: uuidv4(),
      });

      //Message
      action.params.toast.success(action.params.strings["added_to_cart"], {
        className: "toast-custom",
      });

      return {
        ...state,
        cartItems: newCartItems,
      };
    } else {
      const newCartItems = cartItems.map((item) => {
        return item.cartItemId == cartItem.cartItemId
          ? {
              product: item.product,
              quantity: data.quantity,
              selectedProductColor: data.selectedProductColor,
              selectedProductSize: data.selectedProductSize,
              cartItemId: item.cartItemId,
            }
          : item;
      });

      //Message
      action.params.toast(action.params.strings["cart_updated"], {
        className: "toast-custom",
        icon: "👍",
      });

      return {
        ...state,
        cartItems: newCartItems,
      };
    }
  }

  if (action.type == DELETE_FROM_CART) {
    const newCartItems = cartItems.filter(
      (item) => item.product.id != data.product.id
    );

    return {
      ...state,
      cartItems: newCartItems,
    };
  }

  if (action.type == DELETE_ALL_FROM_CART) {
    const newCartItems = cartItems.filter((item) => {
      return false;
    });

    return {
      ...state,
      cartItems: newCartItems,
    };
  }

  return state;
};

export default cartReducer;
