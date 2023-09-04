import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "redux-multilanguage";
import { setCurrency } from "../../redux/actions/currencyActions";
import { multilanguage } from 'redux-multilanguage'

const LanguageCurrency = ({strings}) => {

  const dispatch = useDispatch();
  const changeLanguageTrigger = (e) => {
    const langCode = e.target.value;
    dispatch(changeLanguage(langCode));
  };

  const changeCurrencyTrigger = (e) => {
    const currencyCode = e.target.value;
    dispatch(setCurrency(currencyCode));
  };

  const language = useSelector( (state) => state.multilanguage);
  const currency = useSelector( (state) => state.currencyData);

return (
    <Fragment>
      <div className="language-currency-wrap">
        <div className="same-language-currency">
          <Link className="d-flex gap-2 align-items-center">
            <span>
            
            {
            language.currentLanguageCode == "fr" ? strings['francais']
            :  language.currentLanguageCode == "en" ? strings['anglais']
            : ""
            }
            
            </span>
            <i className="fa fa-angle-down" />
          </Link>

          <div className="dropdown-content langue">
            <ul>
              <li>
                <button value="fr"
                  className={ language.currentLanguageCode == "fr" ? "active" : "" } 
                  onClick={(e) => {
                    changeLanguageTrigger(e);
                  }}
                >
                  {strings['francais']}
                </button>
              </li>
              <li>
                <button value="en"  className={ language.currentLanguageCode == "en" ? "active" : "" } 
                  onClick={(e) => {
                    changeLanguageTrigger(e);
                  }}
                >
                  {strings['anglais']}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="same-language-currency">
          <Link className="d-flex gap-2 align-items-center">
            <span>{currency.currencyName}</span>
            <i className="fa fa-angle-down" />
          </Link>

          <div className="dropdown-content currency">
            <ul>
              <li>
                <button
                  className="active"
                  value="EUR"
                  onClick={(e) => {
                    changeCurrencyTrigger(e);
                  }}
                >
                   {strings['euro']}
                </button>
              </li>
              <li>
                <button
                  value="USD"
                  onClick={(e) => {
                    changeCurrencyTrigger(e);
                  }}
                >
                   {strings['usd']}
                </button>
              </li>
              <li>
                <button
                  value="XOF"
                  onClick={(e) => {
                    changeCurrencyTrigger(e);
                  }}
                >
                   {strings['xof']}
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

export default multilanguage(LanguageCurrency);
