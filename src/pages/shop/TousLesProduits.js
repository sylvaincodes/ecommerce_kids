import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import ShopSidebar from "../../wrappers/shop/ShopSidebar";
import ShopTopBar from "../../wrappers/shop/ShopTopBar";
import ShopProduct from "../../wrappers/shop/ShopProduct";
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import { getSortedProducts } from "../../helpers/product";
import { multilanguage } from "redux-multilanguage";

const TousLesProduits = ({ strings }) => {
  const products = useSelector((state) => state.productData.products);

  const pageLimit = 6;
  const [layout, setLayout] = useState("grid three-colmun");
  const [currentData, setCurrentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageCount = Math.ceil(products.length / pageLimit);

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const getLayout = (layout) => {
    setLayout(layout);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * pageLimit) % products.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setOffset(newOffset);
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {process.env.REACT_APP_SITE_NAME} - Boutique </title>
        <meta
          name="description"
          content={strings["all_products_description"]}
        />
      </Helmet>

      <Layout>
        {/* breadcrumb */}
        <div className="breadcrumb-area bg-gray-3">
          <div className="container-fluid">
            <div className="row">
              <ul className="breadcrumb">
                <BreadcrumbItem
                  link="/"
                  title={strings["home"]}
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem link="#" title={strings["all_products"]}>
                  {strings["all_products"]}
                </BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        {/* liste des produits */}

        <div className="shop-area">
          <div className="container">
            <div className="row">
              {/* sidebar left */}
              <div className="col-lg-3 d-none d-lg-block">
                <ShopSidebar
                  strings={strings}
                  products={currentData}
                  setCurrentData={setCurrentData}
                  getSortParams={getSortParams}
                />
              </div>
              {/* product content  */}
              <div className="col-lg-9">
                <ShopTopBar
                  productCount={products.length}
                  productshowing={currentData.length}
                  strings={strings}
                  layout={layout}
                  products={products}
                  getFilterSortParams={getFilterSortParams}
                />
                <ShopProduct
                  strings={strings}
                  layout={layout}
                  products={currentData}
                />

                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={4}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                    onClick={() => handlePageClick()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default multilanguage(TousLesProduits);
