import React from 'react'
import { Link } from 'react-router-dom'

const ProductSingle = ({ key, data, discountedPrice }) => {
  return (
    <div
    key={key}
    className="col-11 col-sm-11 col-md-10 col-lg-10"
  >
    <div className="wrapper">
      <div className="product-img">
        <Link>
          <img
            src={data.img}
            className="img-fluid"
          />
          <div className="product-discount">
            {data.discount != 0 ? (
              <span className="badge bg-dark">
                - {data.discount} %
              </span>
            ) : (
              ""
            )}
            <span className="badge bg-danger">
              {data.new ? "new" : ""}
            </span>
          </div>
          <div className="product-action">
            <button className="btn btn-lg btn-outline-dark rounded-circle">
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button className="btn btn-lg btn-outline-dark rounded-circle">
              <i className="pe-7s-shuffle"></i>
            </button>
          </div>
        </Link>
      </div>
      <div className="product-content">
        <div className="d-flex justify-content-between">
          <div className="">
            <h3>
              <Link className="title">
                {data.name}
              </Link>
            </h3>
            <div className="gap-2 d-flex justify-content-between">
              <span>
                {" "}
                {discountedPrice
                  ? discountedPrice
                  : data.price}{" "}
                XOF{" "}
              </span>

              {data.discount != 0 ? (
                <del className="text-danger">
                  {" "}
                  {data.price} XOF
                </del>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <i className="pe-7s-like active"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ProductSingle