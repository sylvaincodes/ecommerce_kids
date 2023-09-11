import productReducer from "./productReducer";
import currencyReducer from "./currencyReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "fr" }),
  productData: productReducer,
  currencyData: currencyReducer,
  cartData: cartReducer,
  wishlistData : wishlistReducer,
});

export default rootReducer;
