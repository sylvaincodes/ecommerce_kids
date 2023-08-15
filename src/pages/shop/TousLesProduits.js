import React, { Fragment , useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import ShopSidebar from "../../wrappers/shop/ShopSidebar";
import ShopTopBar from "../../wrappers/shop/ShopTopBar";
import ShopProduct from "../../wrappers/shop/ShopProduct";
import Paginator from "react-hooks-paginator";

const TousLesProduits = () => {

  const [sortType, setSortType] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [filterSortType, setFilterSortType] = useState('');
  const [filterSortValue, setFilterSortValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 15;

  useEffect(() => {
    // let sortedProducts = getSortedProducts(products, sortType , sortValue);
  }, [])
  
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Tous les produits </title>
        <meta
          name="description"
          content="Page d'affichage de tous les produits de la boutique"
        />
      </Helmet>

      <Layout>
        {/* breadcrumb */}
        <div className="breadcrumb-area bg-gray-3">
          <div className="container-fluid">
            <div className="row">
              <ul className="breadcrumb">
                <BreadcrumbItem link="/" title="acceuil"></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="tous-les-produits"
                  title="tous les produits"
                ></BreadcrumbItem>
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
                <ShopSidebar />
              </div>
              {/* product content  */}
              <div className="col-lg-9">
                <ShopTopBar/>
                <ShopProduct/>
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default TousLesProduits;
