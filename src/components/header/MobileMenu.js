import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "redux-multilanguage";
import { setCurrency } from "../../redux/actions/currencyActions";
import { multilanguage } from "redux-multilanguage";
import { Autocomplete, TextField } from "@mui/material";
import { fetchProduct } from "../../redux/actions/productActions";

const MobileMenu = ({ strings }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((state) => state.multilanguage);
  const currency = useSelector((state) => state.currencyData);
  const options = useSelector((state) => state.productData.products);

  const changeLanguageTrigger = (e) => {
    const langCode = e.target.value;
    dispatch(changeLanguage(langCode));
  };

  const changeCurrencyTrigger = (e) => {
    const currencyCode = e.target.value;
    dispatch(setCurrency(currencyCode));
  };

  const [query, setQuery] = useState("");

  const hideMobileMenu = () => {
    document.querySelector(".mobile-menu").classList.remove("active");
  };
  return (
    <div className="mobile-menu">
      <div className="mobile-top">
        <button
          className="mobile-button-close"
          onClick={(e) => hideMobileMenu(e)}
        >
          <i className="pe-7s-close"></i>
        </button>

        <div className="mobile-search mobile">
          <Autocomplete
            limitTags={2}
            loadingText="Loading"
            autoSelect={true}
            autoHighlight={true}
            autoComplete={true}
            getOptionLabel={(option) => option.name}
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                autoFocus
                className="text-capitalize search"
                {...params}
                value={query}
                onChange={(e) => setQuery(e.target.value) }
                fullWidth
                required
              />
            )}
            onChange={(event, values) => {
              dispatch(fetchProduct(values));
              navigate("/produit-detail/" + values.id + "/" + values.slug);
              if (event.key === "Enter") {
                // Prevent's default 'Enter' behavior.
                // alert(event)
                event.defaultMuiPrevented = true;
                // your handler code
              }
            }}
          />
          <button
            className="btn btn-secondary mobile-button-close"
            type="submit"
          >
            <i className="fa fa-search" />
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-nav">
        <nav>
          <ul>
            <li className="menu-item">
              <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
            </li>

            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                {strings["categories"]}
              </Link>
              <span className="menu-expand">
                <i className="fa fa-plus"></i>
              </span>
              <span className="menu-expand">
                <i className="fa fa-minus"></i>
              </span>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">{strings["gaming"]}</Link>
                    </li>
                    <li>
                      <Link to="/">music</Link>
                    </li>
                    <li>
                      <Link to="/">livres</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                {strings["collections"]}
              </Link>
              <span className="menu-expand">
                <i className="fa fa-plus"></i>
              </span>
              <span className="menu-expand">
                <i className="fa fa-minus"></i>
              </span>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">meilleures ventes</Link>
                    </li>
                    <li>
                      <Link to="/">nouvelles arrivages</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-lang">
        <div className="wrapper">
          <div className="lang-widget">
            <span className="title">{strings["language"]}</span>
            <select
              value={language.currentLanguageCode}
              onChange={(e) => {
                changeLanguageTrigger(e);
                // hideMobileMenu();
              }}
            >
              <option value="fr">{strings["francais"]}</option>
              <option value="en">{strings["anglais"]}</option>
            </select>
          </div>
          <div className="lang-widget">
            <span className="title">{strings["devise"]}</span>
            <select
              value={currency.currencyName}
              onChange={(e) => {
                changeCurrencyTrigger(e);
                // hideMobileMenu();
              }}
            >
              <option value="USD">usd</option>
              <option value="XOF">cfa</option>
              <option value="EUR">euro</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mobile-contact">
        <div className="wrapper">
          <div className="contact-widget">
            <Link tel="tel://12452456012">
              <i className="fa fa-phone"></i>
              <span>+1 232 222 080</span>
            </Link>
          </div>
          <div className="contact-widget">
            <Link href="mailto:info@yourdomain.com">
              <i className="fa fa-envelope"></i>
              <span>info@yourdomain.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(MobileMenu);
