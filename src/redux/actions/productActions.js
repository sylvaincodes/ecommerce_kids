export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const fetchProductSuccess = product => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product
});

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};

// fetch product
export const fetchProduct = product => {
  return dispatch => {
    dispatch(fetchProductSuccess(product));
  };
};
