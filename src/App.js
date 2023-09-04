import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/other/Cart.js";
import Checkout from "./pages/other/Checkout.js";
import PaiementDetails from "./pages/other/PaiementDetails.js";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { useDispatch } from "react-redux";
import Register from "./pages/other/Signup.js";
import Login from "./pages/other/Login.js";
import Myaccount from "./pages/other/Myaccount.js";
import Order from "./pages/other/Order.js";
import Compare from "./pages/other/Compare.js";
import Wishlist from "./pages/other/Wishlist.js";

const Home1 = lazy(() => import("./pages/home/Home1.jsx"));
const TousLesProduits = lazy(() => import("./pages/shop/TousLesProduits.js"));
const ProductDetail = lazy(() => import("./pages/product/ProductDetail.js"));
const Preloader = lazy(() =>
  import("./components/sub-componenets/Preloader.js")
);

const App = ({ props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fr: require("./translations/french.json"),
        },
      })
    );
  });

  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home1} />
          <Route path="/tous-les-produits" Component={TousLesProduits} />
          <Route path="/produit-detail/:id/:name" Component={ProductDetail} />
          <Route path="/cart" Component={Cart} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/checkout/details" Component={PaiementDetails} />
          <Route path="/signup" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/myaccount" Component={Myaccount} />
          <Route path="/account/order" Component={Order} />
          <Route path="/compare" Component={Compare} />
          <Route path="/wishlist" Component={Wishlist} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default multilanguage(App);
