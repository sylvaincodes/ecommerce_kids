// get product discount price
export const getDiscountPrice = (price, discount) => {
    return discount && discount > 0 ? price - price * (discount / 100) : null;
};


//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {
    if (products && sortType && sortValue) {
      if (sortType === "category") {
        return products.filter(
          product => product.category.filter(single => single === sortValue)[0]
        );
      }
      if (sortType === "tag") {
        return products.filter(
          product => product.tag.filter(single => single === sortValue)[0]
        );
      }
      if (sortType === "color") {
        return products.filter(
          product =>
            product.variation &&
            product.variation.filter(single => single.color === sortValue)[0]
        );
      }
      if (sortType === "size") {
        return products.filter(
          product =>
            product.variation &&
            product.variation.filter(
              single => single.size.filter(single => single.name === sortValue)[0]
            )[0]
        );
      }
      if (sortType === "filterSort") {
        let sortProducts = [...products];
        if (sortValue === "default") {
          return sortProducts;
        }
        if (sortValue === "priceHighToLow") {
          return sortProducts.sort((a, b) => {
            return b.price - a.price;
          });
        }
        if (sortValue === "priceLowToHigh") {
          return sortProducts.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
    }
    return products;
  };
  

  // get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    single =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize === size : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        single =>
          single.id === product.id &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};