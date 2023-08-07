import React, { Fragment , useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import animateScroll from 'react-scroll'

const Footer = () => {

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

  const scrollToTop = () =>{
    animateScroll.scrollToTop();
  }

  return (
    <Fragment>
        <footer className='footer-area bg-gray-3'>  
            <div className='container'>
                <div className='row'>
                    <div className='wrapper'>
                        <div className='col-12'>
                            <div className='logo'>
                                <Link to="/">
                                    <img width={100}  className='img-fluid' src="./assets/img/logo.jpg"/>
                                </Link>
                                <p>© 2020</p>
                                <p>Tout droits réservés</p>
                            </div>
                        </div>
                        <div className='col-12 '>
                          <div className='footer-widget'>
                            <div className='footer-title'>
                                <h3 className='title'> à propos de nous </h3>
                            </div>
                            <div className='footer-content'>
                                  <ul>
                                      <Link to="/">
                                          about
                                      </Link>
                                      <Link to="/">
                                          store location
                                      </Link>
                                      <Link to="/">
                                          contact
                                      </Link>
                                      <Link to="/">
                                          order tracking
                                      </Link>
                                  </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className='col-12 '>
                        <div className='footer-widget'>
                            <div className='footer-title'>
                                <h3 className='title'> useful links </h3>
                            </div>
                            <div className='footer-content'>
                                  <ul>
                                      <Link to="/">
                                          returns
                                      </Link>
                                      <Link to="/">
                                          support
                                      </Link>
                                      <Link to="/">
                                          size guide
                                      </Link>
                                      <Link to="/">
                                          faqs
                                      </Link>
                                  </ul>
                            </div>
                            </div>
                        </div>
                        
                        <div className='col-12 '>
                        <div className='footer-widget'>
                            <div className='footer-title'>
                                <h3 className='title'> follow us </h3>
                            </div>
                            <div className='footer-content'>
                                  <ul>
                                      <Link to="/">
                                          facebook
                                      </Link>
                                      <Link to="/">
                                          twitter
                                      </Link>
                                      <Link to="/">
                                          instagram
                                      </Link>
                                      <Link to="/">
                                          youtube
                                      </Link>
                                  </ul>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <button className={`scroll-top ${scroll > top ? 'show' : '' } `} onClick={ () => scrollToTop()}>
            <i className="fa fa-angle-double-up"></i>
            </button>
        </footer>
    </Fragment>
  )
}

export default Footer