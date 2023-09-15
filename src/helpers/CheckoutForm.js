import React, { Fragment, useState } from "react";
import ButtonStyle from "../components/sub-componenets/ButtonStyle";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { multilanguage } from "redux-multilanguage";
import axios from "axios";
import { setOrders } from "./auth";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "./product";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ strings }) => {
  let cartTotalPrice = 0;

  const cart = useSelector((state) => state.cartData.cartItems);
  const currency = useSelector((state) => state.currencyData);

  const [loading, setLoading] = useState(false);

  cart.forEach((item) => {
    const discountedPrice = getDiscountPrice(
      item.product.price,
      item.product.discount
    );
    const finalProductPrice = (
      item.product.price * currency.currencyRate
    ).toFixed(2);
    const finalDiscountedPrice = (
      discountedPrice * currency.currencyRate
    ).toFixed(2);

    discountedPrice != null
      ? (cartTotalPrice += finalDiscountedPrice * item.quantity)
      : (cartTotalPrice += finalProductPrice * item.quantity);
  });

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    errorMessage != null ? setLoading(false) : setLoading(true);

    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint

    const params = {
      amount: cartTotalPrice,
      currency: currency.currencyName.toLowerCase(),
    };

    axios
      .post(`https://stripe-api-qemt.onrender.com/create-intent`, params)
      .then((response) => {
        const clientSecret = response.data.client_secret;
        const { error } = stripe.confirmPayment({
          //`Elements` instance that was used to create the Payment Element
          elements,
          clientSecret,
          confirmParams: {
            return_url: "https://shop-you-me.web.app/checkout/complete",
            // return_url: "https//localhost:3000/checkout/complete",
          },
        });

        if (error) {
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Show error to your customer (for example, payment
          // details incomplete)
          setErrorMessage(error.message);
        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
          let array = [];
          let newArray = array.concat(response);
          newArray = array.concat(cart);

          setOrders(newArray);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <div className="row ms-3">
        <ButtonStyle
          type="submit"
          classBtn="btn-style-3 hover-style-2"
          classCol="col-11 col-md-5 col-lg-3"
          title={strings["checkout"]}
          //   icon='<i className="fa fa-lock"></i>'
          disabled={!stripe || !elements}
        />
      </div>

      {/* Show error message to your customers */}

      {errorMessage == null ? "" : <div>{errorMessage}</div>}

      {loading && errorMessage == null
        ? toast.loading(`${strings["loading"]}...`)
        : ""}
    </form>
  );
};

export default multilanguage(CheckoutForm);
