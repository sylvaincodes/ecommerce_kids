import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MainNav = ({strings}) => {
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
            <span>{strings['home']}</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/">
            <span>{strings['category']}</span>
            <i className="fa fa-angle-down"></i>
          </Link>
          <div className="sub-menu-content ">
            <ul className="sub-menu-list row">
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>{strings['gaming']}</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">PC</Link>
                    </li>{" "}
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">xbox 360</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">playstation 5</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">playstation 4</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Réalité virtuelle</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Nitendo Switch</Link>
                    </li>{" "}
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Xbox Series X</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>{strings['beauty']}</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Santé et soins du corps</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Homme</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Bio</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Cosmétiques</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Pharmacetique</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>{strings['high-tech']}</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">ordinateurs portables</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">tablettes</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">réseaux</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">ogiciels</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">accésoires</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link className="fw-light">
                  <div className="icon d-none"></div>
                  <span>{strings['books']}</span>
                </Link>
                <div className="sub-content sub-sub">
                  <ul>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Ebook Kindle</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">Prime Reading</Link>
                    </li>
                    <li className="">
                      <Link className="" to="/produit-detail/2/blazer-man">manuels scolaires</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu-item">
          <Link to="/">
            <span>{strings['collections']}</span>
            <i className="fa fa-angle-down"></i>
          </Link>
          <div className="sub-menu-content pb-0">
            <ul className="sub-menu-list">
              <li className="sub-menu-item">
                <Link>meilleures ventes</Link>
                <div className="sub-content">
                  <ul>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Console PS5</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Razer Raptor 27</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Logitech G Pro</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">WC Freeze Maxwell</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Hyper X Cloud II </Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Iron Flame ( Books)</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu-item">
                <Link>Noueaux arrivages</Link>
                <div className="sub-content">
                  <ul>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Lampe UV sèche</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Tom Tom GPS</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">EA Sport FC 24</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Samsung Galaxy S9</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">HP EliteDesk 800 G5 Mini PC</Link>
                    </li>
                    <li>
                      <Link to="/produit-detail/2/blazer-man">Dell Chromebook 11 3180</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="mega-menu-img">
              {/* <img
                src={
                  process.env.REACT_APP_PUBLIC_URL +
                  `./assets/img/banner/banner-4.png`
                }
                alt="banner" className="img-fluid"
              /> */}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default multilanguage(MainNav);
