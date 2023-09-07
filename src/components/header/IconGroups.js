import React from "react";
import { useRef } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { multilanguage } from "redux-multilanguage";
import { useState } from "react";
import { useDeferredValue } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import { deleteFromCart } from "../../redux/actions/cartActions";
import toast, { Toaster } from 'react-hot-toast';

const IconGroups = ({ strings }) => {
  let cartTotalPrice = 0;

  const focusSearchInput = useRef();
  const currency = useSelector((state) => state.currencyData);
  const cart = useSelector((state) => state.cartData.cartItems);

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleDeleteItem = (product) => {
    dispatch(deleteFromCart(product,toast,strings));
  };

  const handleAccountClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleCartClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const showMobileMenu = ({ strings }) => {
    document.querySelector(".mobile-menu").classList.add("active");
  };

  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const options = [
    {
      id: 1,
      image: [
        "./assets/img/product/fashion/1.jpg",
        "./assets/img/product/fashion/2.jpg",
      ],
      name: "jacket kid",
      slug: "jacket-kid",
      price: "1000",
      discount: "0",
      new: true,
      collection: "bestsales",
      rating: 3,
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      variation: [
        {
          color: "white",
          image: "/assets/img/product/fashion/1.jpg",
          size: [
            {
              name: "x",
              stock: 3,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 5,
            },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/8.jpg",
          size: [
            {
              name: "x",
              stock: 4,
            },
            {
              name: "m",
              stock: 7,
            },
            {
              name: "xl",
              stock: 9,
            },
            {
              name: "xxl",
              stock: 1,
            },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/3.jpg",
          size: [
            {
              name: "x",
              stock: 1,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 4,
            },
            {
              name: "xxl",
              stock: 0,
            },
          ],
        },
      ],
      saleCount: 54,
      category: "fashion",
      tag: ["fashion", "men", "jacket", "full sleeve"],
    },
    {
      id: 2,
      image: [
        "./assets/img/product/fashion/2.jpg",
        "./assets/img/product/fashion/1.jpg",
      ],
      name: "blazer man",
      slug: "blazer-man",
      price: "2000",
      discount: "10",
      new: false,
      collection: "bestsales",
      rating: 3,
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      variation: [
        {
          color: "white",
          image: "/assets/img/product/fashion/1.jpg",
          size: [
            {
              name: "x",
              stock: 3,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 5,
            },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/8.jpg",
          size: [
            {
              name: "x",
              stock: 4,
            },
            {
              name: "m",
              stock: 7,
            },
            {
              name: "xl",
              stock: 9,
            },
            {
              name: "xxl",
              stock: 1,
            },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/3.jpg",
          size: [
            {
              name: "x",
              stock: 1,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 4,
            },
            {
              name: "xxl",
              stock: 0,
            },
          ],
        },
      ],
      saleCount: 54,
      category: "fashion",
      tag: ["fashion", "men", "jacket", "full sleeve"],
    },
    {
      id: 3,
      image: [
        "./assets/img/product/fashion/3.jpg",
        "./assets/img/product/fashion/4.jpg",
      ],
      name: "dress women",
      slug: "dress-women",
      price: "3700",
      discount: "10",
      new: true,
      collection: "newarrivals",
      rating: 3,
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      variation: [
        {
          color: "white",
          image: "/assets/img/product/fashion/1.jpg",
          size: [
            {
              name: "x",
              stock: 3,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 5,
            },
          ],
        },
        {
          color: "black",
          image: "/assets/img/product/fashion/8.jpg",
          size: [
            {
              name: "x",
              stock: 4,
            },
            {
              name: "m",
              stock: 7,
            },
            {
              name: "xl",
              stock: 9,
            },
            {
              name: "xxl",
              stock: 1,
            },
          ],
        },
        {
          color: "brown",
          image: "/assets/img/product/fashion/3.jpg",
          size: [
            {
              name: "x",
              stock: 1,
            },
            {
              name: "m",
              stock: 2,
            },
            {
              name: "xl",
              stock: 4,
            },
            {
              name: "xxl",
              stock: 0,
            },
          ],
        },
      ],
      saleCount: 54,
      category: "fashion",
      tag: ["fashion", "men", "jacket", "full sleeve"],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="same-style header-search d-none d-lg-block">
        <button onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search"></i>
        </button>
        <div className="search-content">
          <form className="row" onSubmit={handleSubmitSearch}>
            <Autocomplete
              // filterOptions={(options, state) => {
              //   const displayOptions = options.filter((option) => {
              //      option.name.toUpperCase();
              //   });
              //   return displayOptions;
              // }}
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
                  label={strings["search"]}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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

            {/* <button className="search-button" title={strings["search"]}>
              <i className="pe-7s-search"></i>
            </button> */}
          </form>

          {/* <SearchResults query={deferredQuery} deferredQuery={deferredQuery} /> */}
        </div>
      </div>
      <div className="same-style header-account d-none d-lg-block">
        <button onClick={(e) => handleAccountClick(e)}>
          <i className="pe-7s-user-female"></i>
        </button>
        <div className="dropdown-content account">
          <ul>
            <li>
              <Link to="/login">
                <span>{strings["login"]}</span>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <span>{strings["signup"]}</span>
              </Link>
            </li>
            <li>
              <Link to="/myaccount">
                <span>{strings["account"]}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-style header-compare>">
        <Link to="/compare" title={strings["shuffle"]}>
          <i className="pe-7s-shuffle"></i>
          <span className="count-style">0</span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to="/wishlist" title={strings["wishlist"]}>
          <i className="pe-7s-like"></i>
          <span className="count-style">0</span>
        </Link>
      </div>
      <div className="same-style header-cart d-none d-lg-block">
        <Link onClick={(e) => handleCartClick(e)} title={strings["see_cart"]}>
          <i className="pe-7s-shopbag"></i>
          <span className="count-style cart-number">{cart.length}</span>
        </Link>
        <div className="cart-content">
          <ul className="cart-list">
            {cart &&
              cart.map((item, key) => {
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

                return (
                  <li className="cart-item" key={key}>
                    <img
                      className="img-fluid"
                      src={
                        process.env.REACT_APP_PUBLIC_URL + item.product.image[0]
                      }
                      alt="produit"
                    />
                    <div className="cart-item-desc">
                      <ul>
                        <li>{item.product.name}</li>
                        <li>
                          {strings["qte"]} : {item.quantity}
                        </li>
                        <li>
                          {strings["price"]} : &nbsp;
                          <NumericFormat
                            value={
                              discountedPrice
                                ? finalDiscountedPrice
                                : finalProductPrice
                            }
                            thousandsGroupStyle="lakh"
                            thousandSeparator=" "
                            decimalSeparator="."
                            decimalScale={0}
                            fixedDecimalScale
                            prefix={""}
                            suffix={" " + currency.currencySymbol}
                            displayType="text"
                          />
                        </li>
                        <li>{strings["color"]} : Blanc</li>
                        <li>{strings["size"]} : X</li>
                      </ul>
                    </div>
                    <div
                      className="cart-delete-btn"
                      onClick={(e) => handleDeleteItem(item.product)}
                    >
                      <button title={strings["delete"]} className="btn-hover-2">
                        <i className="fa fa-close"></i>
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="cart-total">
            <ul>
              <li>{strings["total"]}</li>
              <li>
                <NumericFormat
                  value={cartTotalPrice}
                  thousandsGroupStyle="lakh"
                  thousandSeparator=" "
                  decimalSeparator="."
                  decimalScale={0}
                  fixedDecimalScale
                  prefix={""}
                  suffix={" " + currency.currencySymbol}
                  displayType="text"
                />
              </li>
            </ul>
          </div>
          <div className="cart-buttons">
            <div className="d-grid gap-2">
              <Link to="/cart" className="btn btn-outline-dark btn-lg w-100">
                {strings["cart"]}
              </Link>
              <Link
                to="/checkout"
                className="btn btn-outline-dark btn-lg w-100"
              >
                {strings["checkout"]}
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

export default multilanguage(IconGroups);
