import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Cart from "./pages/other/Cart.js";
import Checkout from "./pages/other/Checkout.js";
import PaiementDetails from "./pages/other/PaiementDetails.js";

const Home1 = lazy(() => import("./pages/home/Home1.jsx"));
const TousLesProduits = lazy(() => import("./pages/shop/TousLesProduits.js"));
const ProductDetail = lazy(() => import("./pages/product/ProductDetail.js"));
const Preloader = lazy(() =>
  import("./components/sub-componenets/Preloader.js")
);

const App = () => {
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
          </Routes>
        </BrowserRouter>
      </Suspense>
    
  );
};

export default App;
