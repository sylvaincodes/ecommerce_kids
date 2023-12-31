import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Swiper from "react-id-swiper";
import ProductRating from "../../components/sub-componenets/ProductRating";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { multilanguage } from "redux-multilanguage";

const ProductModal = ({ product, discountedPrice, show, onHide, strings }) => {
  const currency = useSelector((state) => state.currencyData);

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );

  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  const handleImagePreview = (e) => {
    const img = e.target.src;
    setImagePreview(img);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton>
        <div className="row w-100">

        <h4 className="text-center text-capitalize">
          {strings["product_info"]}
        </h4>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="product-large-image-wrapper">
              <Swiper {...gallerySwiperParams}>
                {product.image &&
                  product.image.map((single, key) => {
                    return (
                      <div key={key}>
                        <div className="single-image">
                          <img
                            src={
                              imagePreview
                                ? imagePreview
                                : process.env.REACT_APP_PUBLIC_URL + single
                            }
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
            <div className="product-small-image-wrapper mt-15">
              <Swiper {...thumbnailSwiperParams}>
                {product.image &&
                  product.image.map((single, key) => {
                    return (
                      <div key={key}>
                        <div className="single-image">
                          <img
                            onClick={(e) => handleImagePreview(e)}
                            src={process.env.REACT_APP_PUBLIC_URL + single}
                            className="img-thumbnail"
                            alt="product"
                          />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="product-details-content">
              <h2 className="title">{product.name}</h2>
              <div className="product-details-price">
                <span className="discount">
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

                {discountedPrice ? (
                  <del className="price">
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

            {product.rating && product.rating > 0 ? (
              <div className="pro-details-rating-wrap">
                <div className="pro-details-rating">
                  <ProductRating ratingValue={product.rating} />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="pro-details-list">
              <p>{product.shortDescription}</p>
            </div>

            <div className="pro-details-size-color">
              <div className="col-5 pro-details-color-wrap">
                <h5 className="title">{strings["color"]}</h5>
                <div className="pro-details-color-content">
                  {product.variation.map((single, key) => {
                    return (
                      <label
                        className={`pro-details-color-content--single ${single.color}`}
                        key={key}
                      >
                        <input
                          type="radio"
                          value={single.color}
                          name="product-color"
                          checked={
                            single.color === selectedProductColor
                              ? "checked"
                              : ""
                          }
                          onChange={() => {
                            setSelectedProductColor(single.color);
                            setSelectedProductSize(single.size[0].name);
                            setProductStock(single.size[0].stock);
                            setQuantityCount(1);
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="col-5 pro-details-size">
                <h5 className="title">{strings["size"]}</h5>
                <div className="pro-details-size-content">
                  {product.variation &&
                    product.variation.map((single) => {
                      return single.color === selectedProductColor
                        ? single.size.map((singleSize, key) => {
                            return (
                              <label
                                className={`pro-details-size-content--single`}
                                key={key}
                              >
                                <input
                                  type="radio"
                                  value={singleSize.name}
                                  checked={
                                    singleSize.name === selectedProductSize
                                      ? "checked"
                                      : ""
                                  }
                                  onChange={() => {
                                    setSelectedProductSize(singleSize.name);
                                    setProductStock(singleSize.stock);
                                    setQuantityCount(1);
                                  }}
                                />
                                <span className="size-name">
                                  {singleSize.name}
                                </span>
                              </label>
                            );
                          })
                        : "";
                    })}
                </div>
              </div>
            </div>

            <div className="pro-details-quality">
              <div className="cart-plus-minus">
                <button
                  className="dec qtybutton"
                  onClick={(e) =>
                    setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                  }
                >
                  -
                </button>
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  value={quantityCount}
                  readOnly
                />
                <button
                  className="inc qtybutton"
                  onClick={(e) =>
                    setQuantityCount(
                      quantityCount < productStock
                        ? quantityCount + 1
                        : quantityCount
                    )
                  }
                >
                  +
                </button>
              </div>

              <div className="pro-details-cart">
                <button className="">{strings["add_to_cart"]}</button>
              </div>

              <div className="pro-details-actions">
                <button title={strings["add_to_shuffle"]}>
                  <i className="pe-7s-shuffle"></i>
                </button>

                <button title={strings["add_to_whistle"]}>
                  <i className="pe-7s-like"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default multilanguage(ProductModal);
