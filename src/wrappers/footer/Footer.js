import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";
import { multilanguage } from 'redux-multilanguage'

const Footer = ({strings}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Fragment>
      <footer className="footer-area bg-gray-3">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <div className="col-12">
                <div className="logo">
                  <Link to="/">
                    <img
                      width={100}
                      className="img-fluid"
                      src={process.env.REACT_APP_PUBLIC_URL + `./assets/img/logo.jpg`}
                      alt="logo"
                    />
                  </Link>
                  <p>© 2020</p>
                  <p>{strings['tous_droits_reserves']}</p>
                </div>
              </div>
              <div className="col-12 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h3 className="title"> {  strings['a_propos_nous']} </h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <Link to="/">{  strings['a_propos']}</Link>
                      <Link to="/">{  strings['adresse']}</Link>
                      <Link to="/">{  strings['contact']}</Link>
                      <Link to="/">{  strings['livraison']}</Link>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h3 className="title"> {  strings['liens_utiles']} </h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <Link to="/">{  strings['remboursement']}</Link>
                      <Link to="/">{  strings['support']}</Link>
                      <Link to="/">{  strings['taille']}</Link>
                      <Link to="/">{  strings['faqs']}</Link>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h3 className="title"> {  strings['reseaux']} </h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <Link to="/">facebook</Link>
                      <Link to="/">twitter</Link>
                      <Link to="/">instagram</Link>
                      <Link to="/">youtube</Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`scroll-top ${scroll > top ? "show" : ""} `}
          onClick={() => scrollToTop()}
        >
          <i className="fa fa-angle-double-up"></i>
        </button>
      </footer>
    </Fragment>
  );
};

export default  multilanguage(Footer);
