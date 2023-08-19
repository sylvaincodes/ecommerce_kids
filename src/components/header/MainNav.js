import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  const menuExpand = document.querySelectorAll(".menu-expand");

  const sideSubMenu = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  for (let i = 0; i < menuExpand.length; i++) {
    menuExpand[i].addEventListener("click", (e) => {
      sideSubMenu(e);
    });
  }

  return (
    <nav className="main-menu">
      <ul className="main-menu-list">
        <li className="menu-item">
          <Link to="/">
            <span>Acceuil</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/">
            <span>Catégories</span>
            <i className="fa fa-angle-down"></i>
          </Link>
          <div className="sub-menu-content ">
            <ul className="sub-menu-list row">
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>jeux vidéos & consoles</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <a className="">playstation 5</a>
                    </li>
                    <li className="">
                      <a className="">playstation 4</a>
                    </li>
                    <li className="">
                      <a className="">xbox 360</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>Musique</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <a className="">pop</a>
                    </li>
                    <li className="">
                      <a className="">rnb</a>
                    </li>
                    <li className="">
                      <a className="">classic country</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link className="fw-light">Livres</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          <Link to="/">
            <span>Collections</span>
            <i className="fa fa-angle-down"></i>
          </Link>
          <div className="sub-menu-content pb-0">
            <ul className="sub-menu-list">
              <li className="sub-menu-item">
                <Link>meilleurs ventes</Link>
                <div className="sub-content">
                  <ul>
                    <li>
                      <a>Produit 1</a>
                    </li>
                    <li>
                      <a>Produit 2</a>
                    </li>
                    <li>
                      <a>Produit 3</a>
                    </li>
                    <li>
                      <a>Produit 4</a>
                    </li>
                    <li>
                      <a>Produit 5</a>
                    </li>
                    <li>
                      <a>Produit 6</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link>nouvelles arrivages</Link>
                <div className="sub-content">
                  <ul>
                    <li>
                      <a>Produit 1</a>
                    </li>
                    <li>
                      <a>Produit 2</a>
                    </li>
                    <li>
                      <a>Produit 3</a>
                    </li>
                    <li>
                      <a>Produit 4</a>
                    </li>
                    <li>
                      <a>Produit 5</a>
                    </li>
                    <li>
                      <a>Produit 6</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="mega-menu-img">
              <img src={process.env.REACT_APP_PUBLIC_URL + `./assets/img/banner/banner-4.png`}  alt="banner" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
