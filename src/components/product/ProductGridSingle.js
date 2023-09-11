import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../../wrappers/product/ProductModal";
import { fetchProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import { toast } from "react-hot-toast";

const ProductGridSingle = ({
  product,
  discountedPrice,
  sliderClassName,
  strings,
}) => {
  const currency = useSelector((state) => state.currencyData);
  const dispatch = useDispatch();

  const likeProduct = (e) => {
    e.target.classList.toggle("active");
    toast.success(strings['added_to_wishlist']);
  };

  const [modal, setModalShow] = useState(false);
  
  const handleProduct = (product) => {
    dispatch(fetchProduct(product));
  };

  return (
    <Fragment>
      <div
        className={
          sliderClassName
            ? sliderClassName
            : "col-8 col-xl-3 col-md-6 col-lg-4 col-sm-6"
        }
        key={product.id}
      >
        <div className="wrapper">
          <div className="product-img">
            <Link
              to={"/produit-detail/" + product.id + "/" + product.slug}
              onClick={() => handleProduct(product)}
            >
              <img
                src={process.env.REACT_APP_PUBLIC_URL + product.image[0]}
                className="img-fluid"
              />
              {product.image.length > 1 ? (
                <img
                  className="product-hover-img img-fluid"
                  src={process.env.REACT_APP_PUBLIC_URL + product.image[1]}
                  alt=""
                />
              ) : (
                ""
              )}
              <div className="product-discount">
                {product.discount != 0 ? (
                  <span className="badge bg-dark">- {product.discount} %</span>
                ) : (
                  ""
                )}
                <span className="badge bg-danger">
                  {product.new ? "new" : ""}
                </span>
              </div>
            </Link>
            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button className="active" title={strings["add_to_whistle"]}>
                  <i className="pe-7s-like" />
                </button>
              </div>

              <div className="pro-same-action pro-cart">
                <Link className="active" title={strings["add_to_cart"]} to={"/produit-detail/" + product.id + "/" + product.slug}>
                  <i className="pe-7s-cart" />
                  <span className="title"> {strings["add"]} </span>
                </Link>
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
            <div className="d-flex justify-content-between px-3">
              <div className="">
                <h3>
                  <Link className="title">{product.name}</Link>
                </h3>
                <div className="gap-2 d-flex justify-content-between">
                  <span>
                    <NumericFormat
                      value={discountedPrice ? discountedPrice : product.price}
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

                  {product.discount != 0 ? (
                    <del className="text-danger">
                      {" "}
                      <NumericFormat
                        value={product.price}
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
        product={product}
        discountedPrice={discountedPrice}
      />
    </Fragment>
  );
};

export default ProductGridSingle;
