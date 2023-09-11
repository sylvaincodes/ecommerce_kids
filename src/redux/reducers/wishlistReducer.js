import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  DELETE_ALL_FROM_WISHLIST,
} from "../actions/wishlistActions";
import { v4 as uuidv4 } from "uuid";

const initState = {
  wishlistItems: [],
};

const wishlistReducer = (state = initState, action) => {
  const wishlistItems = state.wishlistItems;

  const data = action.payload;
  //ajout d'un produit au panier
  if (action.type == ADD_TO_WISHLIST) {
    //on récupere le produit à ajouter

    // on verifie si ce produit n'est pas deja ajouté
    const wishlistItem = wishlistItems.filter(
      (item) => item.product.id == data.product.id
    )[0];

    //dans le cas ou il ne trouve pas le produit
    if (wishlistItem === undefined) {
      //on ajoute le nouveau produit au tableau contenant les articles
      const newCartItems = wishlistItems.concat({
        product: data.product,
        wishlistItemId: uuidv4(),
      });

      //Message
      action.params.toast.success(action.params.strings["added_to_wishlist"], {
        className: "toast-custom",
      });

      return {
        ...state,
        wishlistItems: newCartItems,
      };
    } else {
      //Message
      action.params.toast.success(action.params.strings["already_added"], {
        className: "toast-custom",
      });
    }
  }

  if (action.type == DELETE_FROM_WISHLIST) {
    const newCartItems = wishlistItems.filter(
      (item) => item.product.id != data.product.id
    );

    //Message
    action.params.toast.success(action.params.strings["wishlist_deleted"], {
      className: "toast-custom",
    });

    return {
      ...state,
      wishlistItems: newCartItems,
    };
  }

  if (action.type == DELETE_ALL_FROM_WISHLIST) {
    const newCartItems = wishlistItems.filter((item) => {
      return false;
    });

    action.params.toast.success(action.params.strings["all_items_deleted"], {
      className: "toast-custom",
    });

    return {
      ...state,
      wishlistItems: newCartItems,
    };
  }

  return state;
};

export default wishlistReducer;
