import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LanguageCurrency = () => {
  const changeLanguageTrigger = (e) => {
    const langCode = e.target.value;
    //Todo
    //action here
  };

  const changeCurrencyTrigger = (e) => {
    const currencyCode = e.target.value;
    //Todo
    //action here
  };

  return (
    <Fragment>
      <div className="language-currency-wrap">
        <div className="same-language-currency">
          <Link className="d-flex gap-2 align-items-center">
            <span>Français</span>
            <i className="fa fa-angle-down" />
          </Link>

          <div className="dropdown-content langue">
            <ul>
              <li>
                <button
                  className="active"
                  onClick={(e) => {
                    changeLanguageTrigger(e);
                  }}
                >
                  français
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    changeLanguageTrigger(e);
                  }}
                >
                  anglais
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="same-language-currency">
          <Link className="d-flex gap-2 align-items-center">
            <span>EUR</span>
            <i className="fa fa-angle-down" />
          </Link>

          <div className="dropdown-content currency">
            <ul>
              <li>
                <button
                  className="active"
                  value="euro"
                  onClick={(e) => {
                    changeCurrencyTrigger(e);
                  }}
                >
                  euro
                </button>
              </li>
              <li>
                <button
                  value="usd"
                  onClick={(e) => {
                    changeCurrencyTrigger(e);
                  }}
                >
                  usd
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="same-language-currency">
          <span>
            {" "}
            <i className="fa fa-phone"></i> +1 0975 6757 867
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default LanguageCurrency;
