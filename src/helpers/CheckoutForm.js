import React, { Fragment, useState } from "react";
import ButtonStyle from "../components/sub-componenets/ButtonStyle";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { multilanguage } from "redux-multilanguage";

const CheckoutForm = ({ strings }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
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
    const res = await fetch(
      "https://stripe-api-qemt.onrender.com/create-intent",
      {
        mode: "no-cors",
        method: "POST",
      }
    );

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://shop-you-me.web.app/checkout/complete",
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <div className="row ms-3">
        <ButtonStyle
          type="submit"
          classBtn="btn-style-3 hover-style-2"
          classCol="col-2"
          title="payer"
          //   icon='<i className="fa fa-lock"></i>'
          disabled={!stripe || !elements}
        />
      </div>

      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default multilanguage(CheckoutForm);
