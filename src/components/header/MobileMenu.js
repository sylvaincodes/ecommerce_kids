import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const changeLanguageTrigger = (e) => {
    // const langCode = e.target.value;
    //Todo
    //action here
  };

  const changeCurrencyTrigger = (e) => {
    // const currencyCode = e.target.value;
    //Todo
    //action here
  };

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

        <div className="mobile-search">
          <input type="text" placeholder="recherche" />
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
              <Link to={process.env.PUBLIC_URL + "/"}>acceuil</Link>
            </li>

            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>categories</Link>
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
                      <Link to="/">jeux vidéos & consoles</Link>
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
              <Link to={process.env.PUBLIC_URL + "/"}>collections</Link>
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
            <span className="title">selectionner la langue</span>
            <select
              value="fr"
              onChange={(e) => {
                changeLanguageTrigger(e);
                hideMobileMenu();
              }}
            >
              <option value="fr">français</option>
              <option value="fr">anglais</option>
            </select>
          </div>
          <div className="lang-widget">
            <span className="title">selectionner la devise</span>
            <select
              value="fr"
              onChange={(e) => {
                changeCurrencyTrigger(e);
                hideMobileMenu();
              }}
            >
              <option value="usd">usd</option>
              <option value="xof">cfa</option>
              <option value="euro">euro</option>
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

export default MobileMenu;
