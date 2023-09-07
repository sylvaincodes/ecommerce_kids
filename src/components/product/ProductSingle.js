import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../../wrappers/product/ProductModal";
import { fetchProduct } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { multilanguage } from "redux-multilanguage";
import { NumericFormat } from "react-number-format";


const ProductSingle = ({ i, data, discountedPrice, colClass, strings }) => {

  const currency = useSelector((state) => state.currencyData);
  const dispatch = useDispatch();
  const likeProduct = (e) => {
    e.target.classList.toggle("active");
  };

  const [modal, setModalShow] = useState(false);
  const handleProduct = (product) => {
    dispatch(fetchProduct(product));
  };

  return (
    <Fragment>
      <div
        key={i}
        className={colClass ? colClass : "col-11 col-sm-11 col-md-10 col-lg-10"}
      >
        <div className="wrapper">
          <div className="product-img">
            <Link
              to={"/produit-detail/" + data.id + "/" + data.slug}
              onClick={() => handleProduct(data)}
            >
              <img src={data.image[0]} className="img-fluid" />
              {data.image.length > 1 ? (
                <img
                  className="product-hover-img img-fluid"
                  src={process.env.PUBLIC_URL + data.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
              <div className="product-discount">
                {data.discount != 0 ? (
                  <span className="badge bg-dark">- {data.discount} %</span>
                ) : (
                  ""
                )}
                <span className="badge bg-danger">
                  {data.new ? strings["new"] : ""}
                </span>
              </div>
            </Link>
            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button className="active" title={strings["add_to_wishlist"]}>
                  <i className="pe-7s-like" />
                </button>
              </div>

              <div className="pro-same-action pro-cart">
                <button className="active" title={strings["add_to_cart"]}>
                  <i className="pe-7s-cart" />
                  <span className="title">{strings["add"]} </span>
                </button>
              </div>

              <div className="pro-same-action pro-quickview">
                <button
                  className="active"
                  title={strings["look"]}
                  onClick={() => setModalShow(true)}
                >
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3>
                  <Link className="title">{data.name}</Link>
                </h3>
                <div className="gap-2 d-flex justify-content-between">
                  <span>
                  
                    <NumericFormat
                      value={discountedPrice ? discountedPrice : data.price}
                      thousandsGroupStyle="lakh"
                      thousandSeparator=" "
                      decimalSeparator="."
                      decimalScale={0}
                      fixedDecimalScale
                      prefix={""}
                      suffix={" " + currency.currencySymbol}
                      displayType="text"
                    />
                  </span>

                  {data.discount != 0 ? (
                    <del className="text-danger">
                       <NumericFormat
                      value={data.price}
                      thousandsGroupStyle="lakh"
                      thousandSeparator=" "
                      decimalSeparator="."
                      decimalScale={0}
                      fixedDecimalScale
                      prefix={""}
                      suffix={" " + currency.currencySymbol}
                      displayType="text"
                    />
                    </del>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Link to="/" onClick={(e) => likeProduct(e)}>
                <i className="pe-7s-like"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <ProductModal
        show={modal}
        onHide={() => setModalShow(false)}
        product={data}
        discountedPrice={discountedPrice}
      />
    </Fragment>
  );
};

export default multilanguage(ProductSingle);
