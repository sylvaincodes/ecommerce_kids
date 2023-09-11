export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
export const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST";

export const addToWishlist = (product, toast, strings) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
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

export const deleteFromWishlist = (product, toast, strings) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FROM_WISHLIST,
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

export const deleteAllFromWishlist = (toast, strings) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ALL_FROM_WISHLIST,
      params: {
        toast: toast,
        strings: strings,
      }
    });
  };
};
