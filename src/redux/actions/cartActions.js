export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

export const addToCart = (
  product, //{ id : 1, name :"example", variation :[ {...}] ,  }
  quantity, // 2
  selectedProductColor,
  selectedProductSize,
  toast,
  strings
) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product,
        quantity: quantity,
        selectedProductColor: selectedProductColor,
        selectedProductSize: selectedProductSize,
      },
      params: {
        toast: toast,
        strings: strings,
      },
    });
  };
};

export const deleteFromCart = (
  product, //{ id : 1, name :"example", variation :[ {...}] ,  }
  toast,
  strings
) => {
  return (dispatch) => {
    toast(strings["deleted_from_cart"], { className: "toast-custom", icon: "👍" });
    dispatch({
      type: DELETE_FROM_CART,
      payload: {
        product: product,
      },
      params: {
        toast: toast,
        strings: strings,
      },
    });
  };
};

export const deleteAllFromCart = (toast,strings) => {
  return (dispatch) => {
    toast(strings["all_items_deleted"], { className: "toast-custom", icon: "👍" });
    dispatch({
      type: DELETE_ALL_FROM_CART,
    });
  };
};
