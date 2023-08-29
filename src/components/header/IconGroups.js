import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const IconGroups = () => {
  const focusSearchInput = useRef();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
    focusSearchInput.current.focus();
  };

  const handleAccountClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleCartClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const showMobileMenu = () => {
    document.querySelector(".mobile-menu").classList.add("active");
  };

  return (
    <div className="wrapper">
      <div className="same-style header-search d-none d-lg-block">
        <button onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search"></i>
        </button>
        <div className="search-content">
          <form className="row">
            <input
              ref={focusSearchInput}
              className="search"
              type="text"
            ></input>
            <button className="search-button" title="Rechecher">
              <i className="pe-7s-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="same-style header-account d-none d-lg-block">
        <button onClick={(e) => handleAccountClick(e)}>
          <i className="pe-7s-user-female"></i>
        </button>
        <div className="dropdown-content account">
          <ul>
            <li>
              <Link to="/">
                <span>Se connecter</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>S'inscrire</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Mon compte</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-style header-compare>">
        <Link to="/">
          <i className="pe-7s-shuffle"></i>
          <span className="count-style">0</span>
        </Link>
      </div>
      <div className="same-style header-wishlist>">
        <Link to="/">
          <i className="pe-7s-like"></i>
          <span className="count-style">0</span>
        </Link>
      </div>
      <div className="same-style header-cart d-none d-lg-block">
        <Link onClick={(e) => handleCartClick(e)}>
          <i className="pe-7s-shopbag"></i>
          <span className="count-style">0</span>
        </Link>
        <div className="cart-content">
          <ul className="cart-list">
            <li className="cart-item">
              <img
                className="img-fluid"
                src={ process.env.REACT_APP_PUBLIC_URL + "./assets/img/product/fashion/1.jpg" }
                alt="produit"
              />
              <div className="cart-item-desc">
                <ul>
                  <li>Jacket pro</li>
                  <li>Qté : 1</li>
                  <li>Prix : 100 XOF</li>
                  <li>Couleur : Blanc</li>
                  <li>Taille : X</li>
                </ul>
              </div>
              <div className="cart-delete-btn">
                <button title="supprimer" className="btn-hover-2">
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </li>
            <li className="cart-item">
              <img
                className="img-fluid"
                src={ process.env.REACT_APP_PUBLIC_URL + "./assets/img/product/fashion/2.jpg" }
                alt="produit"
              />
              <div className="cart-item-desc">
                <ul>
                  <li>Jacket pro</li>
                  <li>Qté : 1</li>
                  <li>Prix : 100 XOF</li>
                  <li>Couleur : Blanc</li>
                  <li>Taille : X</li>
                </ul>
              </div>
              <div className="cart-delete-btn">
                <button title="supprimer">
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </li>
          </ul>
          <div className="cart-total">
            <ul>
              <li>total :</li>
              <li>200 XOF</li>
            </ul>
          </div>
          <div className="cart-buttons">
            <div className="d-grid gap-2">
              <Link to="/cart" className="btn btn-outline-dark btn-lg w-100">
                panier
              </Link>
              <Link to="/checkout" className="btn btn-outline-dark btn-lg w-100">
                payer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="same-style header-cart d-block d-lg-none">
        <Link to="/">
          <i className="pe-7s-shopbag"></i>
          <span className="count-style">0</span>
        </Link>
      </div>

      <div className="same-style header-menu d-lg-none">
        <button onClick={(e) => showMobileMenu(e)}>
          <i className="pe-7s-menu"></i>
        </button>
      </div>
    </div>
  );
};

export default IconGroups;
