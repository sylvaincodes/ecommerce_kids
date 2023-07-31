import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const focusSearchInput = useRef()
    const handleClick = (e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
        focusSearchInput.current.focus();
    }

    const handleAccountClick =(e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
    }

    const handleCartClick =(e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
    }

  return (
    <header className='header-area'>

        <div className='header-top-area d-none d-lg-block'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='language-currency-wrap'>
                        <div className='same-language-currency'>
                            <span>Français</span>
                            <i className="fa fa-angle-down" />
                        </div>
                        
                        <div className='same-language-currency'>
                            <span>EUR</span>
                            <i className="fa fa-angle-down" />
                        </div>
                        
                        <div className='same-language-currency'>
                            <span> <i className='fa fa-phone'></i>  +1 0975 6757 867</span>
                        </div>
                    </div>
                    
                    <p className='header-offer'>Livraison gratuite à partir de <span>100  XOF</span> </p>
                    
                </div>
            </div>
        </div>

        <div className='sticky-bar'>
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-2 col-4'>
                        <div className='logo'>
                            <Link to="/">
                                <img src="/assets/img/logo.jpg" width={100} height={100}/>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-6 d-none d-lg-block'>
                        <nav className='main-menu'>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <span>Acceuil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Catégories</span>
                                        <i className='fa fa-angle-down'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Collections</span>
                                        <i className='fa fa-angle-down'></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='col-lg-4 col-8'>
                        <div className='wrapper'>
                            <div className='same-style header-search d-none d-lg-block'>
                                <button onClick={e => handleClick(e)}>
                                    <i className='pe-7s-search'></i>
                                </button>
                                <div className='search-content'>
                                    <form className='row'>
                                        <input ref={focusSearchInput} className='search' type='text'></input>
                                        <button class="search-button" title='Rechecher'>
                                            <i className='pe-7s-search'></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className='same-style header-account d-none d-lg-block'>
                                <button onClick={e => handleAccountClick(e)}>
                                    <i className='pe-7s-user-female'></i>
                                </button>
                                <div className='account-content'>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <span>
                                                    Se connecter
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span>
                                                    S'inscrire
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span>
                                                    Mon compte
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='same-style header-compare>'>
                                <Link to="/">
                                    <i className="pe-7s-shuffle"></i>
                                    <span className='count-style'>0</span>
                                </Link>
                            </div>
                            <div className='same-style header-wishlist>'>
                                <Link to="/">
                                    <i className='pe-7s-like'></i>
                                    <span className='count-style'>0</span>
                                </Link>
                            </div>
                            <div className='same-style header-cart d-none d-lg-block'>
                                <Link onClick={ (e) => handleCartClick(e)}>
                                    <i className='pe-7s-shopbag'></i>
                                    <span className='count-style'>0</span>
                                </Link>
                                <div className='cart-content'>
                                    <ul className='cart-list'>
                                        <li className='cart-item'>
                                            <img className='img-fluid' src="./assets/img/product/fashion/1.jpg"/>
                                            <div className='cart-item-desc'>
                                                <ul>
                                                    <li>
                                                        Jacket pro
                                                    </li>
                                                    <li>
                                                        Qté : 1
                                                    </li>
                                                    <li>
                                                        Prix : 100 XOF
                                                    </li>
                                                    <li>
                                                        Couleur : Blanc
                                                    </li>
                                                    <li>
                                                        Taille : X
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='cart-delete-btn'>
                                                <button title='supprimer'>
                                                    <i className='fa fa-close'></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li className='cart-item'>
                                            <img className='img-fluid' src="./assets/img/product/fashion/1.jpg"/>
                                            <div className='cart-item-desc'>
                                                <ul>
                                                    <li>
                                                        Jacket pro
                                                    </li>
                                                    <li>
                                                        Qté : 1
                                                    </li>
                                                    <li>
                                                        Prix : 100 XOF
                                                    </li>
                                                    <li>
                                                        Couleur : Blanc
                                                    </li>
                                                    <li>
                                                        Taille : X
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='cart-delete-btn'>
                                                <button title='supprimer'>
                                                    <i className='fa fa-close'></i>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='cart-total'>
                                        <ul>
                                            <li>
                                                total :
                                            </li>
                                            <li>
                                                200 XOF
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='cart-buttons'>
                                        <div className='d-grid gap-2'>
                                            <Link to="/" className='btn btn-outline-dark btn-lg w-100'>
                                                panier
                                            </Link>
                                            <Link to="/" className='btn btn-outline-dark btn-lg w-100'>
                                                payer
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='same-style header-cart d-block d-lg-none'>
                                <Link to="/">
                                    <i className='pe-7s-shopbag'></i>
                                    <span className='count-style'>0</span>
                                </Link>
                            </div>

                            <div className='same-style header-menu d-lg-none'>
                                <button>
                                    <i className='pe-7s-menu'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header