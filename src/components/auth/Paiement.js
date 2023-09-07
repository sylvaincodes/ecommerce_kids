import React, { Fragment } from "react";
import AdresseModal from "../../components/sub-componenets/AdresseModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserAdresse } from "../../helpers/auth";
import { multilanguage } from "redux-multilanguage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../helpers/CheckoutForm";
import { getDiscountPrice } from "../../helpers/product";
import { useSelector } from "react-redux";

const Paiement = ({ strings }) => {
  let cartTotalPrice = 0;

  const cart = useSelector((state) => state.cartData.cartItems);
  const currency = useSelector((state) => state.currencyData);

  const stripePromise = loadStripe(
    "pk_test_51LhDZ3JpOn8aP1UipYxoElo4S3s8NydKZ7bR3mvneuXnMFKfgjOFVoKWhmCittMXInC8QggFtVDAIdd5D5uIjxWe00gjFhf6PZ"
  );

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

  const options = {
    mode: "payment",
    amount: cartTotalPrice,
    currency: currency.currencyName.toLowerCase(),
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  const [editAdresse, setEditAdresse] = useState(false);
  const [addMethod, setAddMethod] = useState(false);
  const selectAdresse = () => {};

  const adresses = getUserAdresse();

  const payments_methodes = [
    {
      name: "stripe",
      link: true,
      linkadresse: "stripe.com",
      active: true,
    },
  ];

  return (
    <Fragment>
      <div className="payment-details-widget adresse pb-30">
        <h4 className="mb-3">
          1 - <strong> Choisir une adresse de livraison </strong>
        </h4>
        <div className="card row  ms-3">
          <div className="card-header">Votre adresse</div>
          <ul className="list-group list-group-flush">
            {adresses &&
              adresses.map((single, key) => {
                return (
                  <li key={key} className="list-group-item">
                    <label className="flex-row">
                      <input
                        type="radio"
                        name="adresse"
                        className="radio"
                        checked={true}
                      />

                      <span>
                        {" "}
                        {single.firstname} &nbsp; {single.lastname},{" "}
                        {single.code_postale} , {single.rue} , {single.city},{" "}
                        {single.country}
                        <Link className="link-info">
                          {/* Modifier ici */}
                          <AdresseModal
                            show={editAdresse}
                            onHide={() => setEditAdresse(false)}
                          />
                        </Link>
                      </span>
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="payment-details-widget payment pb-30">
        <h4 className="mb-3">
          2 - <strong> Choisir une méthode de paiement </strong>
        </h4>
        <div className="card row  ms-3">
          <div className="card-header">Votre adresse</div>
          <ul className="list-group list-group-flush">
            {adresses &&
              payments_methodes.map((single, key) => {
                return (
                  <li key={key} className="list-group-item">
                    <label className="flex-row">
                      <input
                        type="radio"
                        name="payment_method"
                        className="radio"
                        checked={single.active ? true : false}
                      />

                      <span> {single.name} &nbsp;</span>
                      {single.link ? (
                        <button
                          className="link-info"
                          onClick={() => setAddMethod(true)}
                        >
                          {/* {strings["add_method"]} */}
                        </button>
                      ) : (
                        ""
                      )}
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="mb-3">
          3 -{" "}
          <strong className="text-capitalize"> {strings["checkout"]} </strong>
        </h4>
        <div className="card row  ms-3">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </Fragment>
  );
};

export default multilanguage(Paiement);
