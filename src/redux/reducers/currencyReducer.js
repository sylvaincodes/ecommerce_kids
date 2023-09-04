import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol : '$',
  currencyName : "USD",
  currencyRate : 1
};

const productReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {

    if (action.payload.currencyName == "USD" ) {   
        return {
            ...state,
            currencyName: action.payload.currencyName,
            currencyRate: action.payload.currencyRate,
            currencySymbol: "$",
        };
    }
    
    if (action.payload.currencyName == "EUR" ) {   
        return {
            ...state,
            currencyName: action.payload.currencyName,
            currencyRate: action.payload.currencyRate,
            currencySymbol: "€",
        };
    }
    
    if (action.payload.currencyName == "XOF" ) {   
        return {
            ...state,
            currencyName: action.payload.currencyName,
            currencyRate: action.payload.currencyRate,
            currencySymbol: "CFA",
        };
    }

  }
  return state;
};

export default productReducer;
