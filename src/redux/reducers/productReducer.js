import { FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCT_SUCCESS } from "../actions/productActions";

const initState = {
  products: [],
  product:{}
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === FETCH_PRODUCT_SUCCESS) {
    return {
      ...state,
      product: action.payload,
    };
  }

  return state;
};

export default productReducer;
