import React , { useState,useEffect} from "react";
import LanguageCurrency from "../../components/header/LanguageCurrency";
import Logo from "../../components/header/Logo";
import IconGroups from "../../components/header/IconGroups";
import MainNav from "../../components/header/MainNav";
import MobileMenu from "../../components/header/MobileMenu";

const Header = () => {

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.sticky-bar');
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  const handleScroll =() =>{
    setScroll(window.scrollY);
  }

  return (
    <header className="header-area">

      <div className="header-top-area d-none d-lg-block">
        <div className="container">
          <div className="wrapper">
            {/* Language and currency component */}
            <LanguageCurrency />
            <p className="header-offer">
              Livraison gratuite à partir de <span>100 XOF</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={`sticky-bar  ${ scroll > headerTop ? "stick" : "" }`} >
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-2 col-4">
              <Logo img={process.env.REACT_APP_PUBLIC_URL + `./assets/img/logo.jpg`} alt="logo-image" />
            </div>

            {/* menu de navigation */}
            <div className="col-lg-6 d-none d-lg-block">
              <MainNav />
            </div>

            {/* icons group header */}
            <div className="col-lg-4 col-8">
              <IconGroups />
            </div>
          </div>

          <MobileMenu />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
