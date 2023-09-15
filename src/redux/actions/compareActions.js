export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const DELETE_FROM_COMPARE = "DELETE_FROM_COMPARE";
export const DELETE_ALL_FROM_COMPARE = "DELETE_ALL_FROM_COMPARE";

export const addToCompare = (product, toast, strings) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_COMPARE,
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

export const deleteFromCompare = (product, toast, strings) => {

  return (dispatch) => {
    dispatch({
      type: DELETE_FROM_COMPARE,
      payload: {
        product: product
      },
      params: {
        toast: toast,
        strings: strings,
      },
    });
  };
};

export const deleteAllFromCompare = (toast, strings) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ALL_FROM_COMPARE,
      params: {
        toast: toast,
        strings: strings,
      },
    });
  };
};
