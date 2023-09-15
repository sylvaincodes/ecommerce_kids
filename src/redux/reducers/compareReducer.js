import {
  ADD_TO_COMPARE,
  DELETE_FROM_COMPARE,
  DELETE_ALL_FROM_COMPARE,
} from "../actions/compareActions";
import { v4 as uuidv4 } from "uuid";

const initState = {
  compareItems: [],
};

const compareReducer = (state = initState, action) => {
  const compareItems = state.compareItems;

  const data = action.payload;
  //ajout d'un produit au panier
  if (action.type == ADD_TO_COMPARE) {
    //on récupere le produit à ajouter

    // on verifie si ce produit n'est pas deja ajouté
    const compareItem = compareItems.filter(
      (item) => item.product.id == data.product.id
    )[0];

    
    //dans le cas ou il ne trouve pas le produit
    if (compareItem === undefined) {
      //on ajoute le nouveau produit au tableau contenant les articles
      const newCompareItems = compareItems.concat({
        product: data.product,
        compareItemId: uuidv4(),
      });

      //Message
      action.params.toast.success(action.params.strings["added_to_compare"], {
        className: "toast-custom",
      });

      return {
        ...state,
        compareItems: newCompareItems,
      };
    } else {
      //Message
      action.params.toast.success(action.params.strings["already_added"], {
        className: "toast-custom",
      });
    }
  }

  if (action.type == DELETE_FROM_COMPARE) {

    console.log(data);
    
    const newCompareItems = compareItems.filter(
      (item) => item.product.id !== data.product.id
    );

    // Message
    action.params.toast.success(action.params.strings["deleted_from_compare"], {
      className: "toast-custom",
    });
    return {
      ...state,
      compareItems: newCompareItems,
    };
  }

  if (action.type == DELETE_ALL_FROM_COMPARE) {
    const newCompareItems = compareItems.filter((item) => {
      return false;
    });

    action.params.toast.success(action.params.strings["all_items_deleted"], {
      className: "toast-custom",
    });

    return {
      ...state,
      compareItems: newCompareItems,
    };
  }

  return state;
};

export default compareReducer;
