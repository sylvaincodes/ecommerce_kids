import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const menuExpand = document.querySelectorAll('.menu-expand')
    const showMobileMenu = () =>{
       document.querySelector('.mobile-menu').classList.add('active');
    }
    
    const hideMobileMenu = () =>{
       document.querySelector('.mobile-menu').classList.remove('active');
    }
    
    const sideSubMenu  = (e) => {
        e.currentTarget.parentElement.classList.toggle('active');
    }
    
    for (let i = 0; i < menuExpand.length; i++) {
         menuExpand[i].addEventListener('click' ,  e => {
             sideSubMenu(e)
            }
         ); 
    }

    const focusSearchInput = useRef()
    const handleClick = (e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
        focusSearchInput.current.focus();
    }

    const handleAccountClick =(e) => {
        e.currentTarget.nextSibling.classList.toggle("active");
    }

    const changeLanguageTrigger =(e) => {
       const langCode = e.target.value;
       e.currentTarget.nextSibling.classList.toggle("active");
       //Todo
        //action here
    }
    
    const changeCurrencyTrigger =(e) => {
       const currencyCode = e.target.value;
       //Todo
        //action here
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
                                <Link className='d-flex gap-2 align-items-center' onClick={ e => { changeLanguageTrigger(e) }}>            
                                    <span>Français</span>
                                    <i className="fa fa-angle-down" />
                                </Link>
                            
                                <div className='dropdown-content langue active'>
                                            <ul>
                                                <li>
                                                    <Link to="/" className='active'>
                                                        <span>
                                                            français
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>
                                                            anglais
                                                        </span>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                </div>    
                                  
                        </div>
                        
                        <div className='same-language-currency'>
                                <Link className='d-flex gap-2 align-items-center' onClick={ e => { changeCurrencyTrigger(e) }}>            
                                    <span>EUR</span>
                                    <i className="fa fa-angle-down" />
                                </Link>

                                <div className='dropdown-content currency active'>
                                            <ul>
                                                <li>
                                                    <Link to="/" className='active'>
                                                        <span>
                                                            euro
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        <span>
                                                            usd
                                                        </span>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                </div>    

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
                            <ul className='main-menu-list'>
                                <li className='menu-item'>
                                    <Link to="/">
                                        <span>Acceuil</span>
                                    </Link>
                                </li>
                                <li className='menu-item'>
                                    <Link to="/">
                                        <span>Catégories</span>
                                        <i className='fa fa-angle-down'></i>
                                    </Link>
                                    <div className='sub-menu-content '>
                                        <ul className='sub-menu-list row'>
                                            <li className='sub-menu-item'>
                                                <Link className='fw-light'>
                                                    <div className='icon d-none'></div>
                                                    <span>
                                                    jeux vidéos & consoles
                                                    </span>
                                                </Link>
                                                <div className='sub-content sub-sub'>
                                                    <ul>
                                                        <li className=''>
                                                            <a className=''> 
                                                            playstation 5
                                                            </a>
                                                        </li>
                                                         <li className=''>
                                                            <a className=''> 
                                                            playstation 4
                                                            </a>
                                                        </li>
                                                        <li className=''>
                                                            <a className=''> 
                                                            xbox 360
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className='sub-menu-item'>
                                                <Link className='fw-light'>
                                                <div className='icon d-none'></div>
                                                     <span>
                                                     Musique
                                                     </span>
                                                </Link>
                                                <div className='sub-content sub-sub'>
                                                    <ul>
                                                        <li className=''>
                                                            <a className=''> 
                                                            pop
                                                            </a>
                                                        </li>
                                                         <li className=''>
                                                            <a className=''> 
                                                            rnb                                                            
                                                            </a>
                                                        </li>
                                                        <li className=''>
                                                            <a className=''> 
                                                            classic country
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className='sub-menu-item'>
                                                <Link className='fw-light'>
                                                    Livres
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='menu-item'>
                                    <Link to="/">
                                        <span>Collections</span>
                                        <i className='fa fa-angle-down'></i>
                                    </Link>
                                    <div className='sub-menu-content pb-0'>
                                        
                                            <ul className='sub-menu-list'>
                                                <li className='sub-menu-item'>
                                                    <Link>
                                                        meilleurs ventes
                                                    </Link>
                                                    <div className='sub-content'>
                                                        <ul>
                                                            <li><a>Produit 1</a></li>    
                                                            <li><a>Produit 2</a></li>    
                                                            <li><a>Produit 3</a></li>    
                                                            <li><a>Produit 4</a></li>    
                                                            <li><a>Produit 5</a></li>    
                                                            <li><a>Produit 6</a></li>    
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='sub-menu-item'>
                                                    <Link>
                                                        nouvelles arrivages
                                                    </Link>
                                                    <div className='sub-content'>
                                                        <ul>
                                                            <li><a>Produit 1</a></li>    
                                                            <li><a>Produit 2</a></li>    
                                                            <li><a>Produit 3</a></li>    
                                                            <li><a>Produit 4</a></li>    
                                                            <li><a>Produit 5</a></li>    
                                                            <li><a>Produit 6</a></li>    
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className='mega-menu-img'>
                                                <img src="./assets/img/banner/banner-4.png" />
                                            </div>
                                        
                                    </div>
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
                                        <button className="search-button" title='Rechecher'>
                                            <i className='pe-7s-search'></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className='same-style header-account d-none d-lg-block'>
                                <button onClick={e => handleAccountClick(e)}>
                                    <i className='pe-7s-user-female'></i>
                                </button>
                                <div className='dropdown-content account'>
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
                                <button onClick={ e => showMobileMenu(e)}>
                                    <i className='pe-7s-menu'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mobile-menu'>

                        <div className='mobile-top'>
                            
                            <button className='mobile-button-close' onClick={ (e) => hideMobileMenu(e) }>
                                <i className='pe-7s-close'></i>
                            </button>

                            <div className='mobile-search'>
                                <input type='text' placeholder='recherche' />
                                <button className='btn btn-secondary mobile-button-close' type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>

                        </div>

                        <div className='mobile-nav' id='mobile-nav'>
                                <nav>
                                    <ul>
                                        <li className='menu-item'>
                                            <Link to={process.env.PUBLIC_URL + "/"}>acceuil</Link>
                                        </li>

                                        <li className='menu-item-has-children'>
                                            <Link to={process.env.PUBLIC_URL + "/"}>categories</Link>
                                            <span className="menu-expand"><i className='fa fa-plus'></i></span>
                                            <span className="menu-expand"><i className='fa fa-minus'></i></span>
                                            <ul className='sub-menu'>
                                                <li className='menu-item-has-children'>
                                                       
                                                        <ul className='sub-menu'>
                                                            <li>
                                                                <Link to="/">jeux vidéos & consoles</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">music</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">livres</Link>
                                                            </li>
                                                        </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className='menu-item-has-children'>
                                            <Link to={process.env.PUBLIC_URL + "/"}>collections</Link>
                                            <span className="menu-expand"><i className='fa fa-plus'></i></span>
                                            <span className="menu-expand"><i className='fa fa-minus'></i></span>
                                            <ul className='sub-menu'>
                                                <li className='menu-item-has-children'> 
                                                        <ul className='sub-menu'>
                                                            <li>
                                                                <Link to="/">meilleures ventes</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">nouvelles arrivages</Link>
                                                            </li>
                                                        </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </nav>
                        </div>

                        <div className='mobile-lang'>
                            <div className='wrapper'>
                                <div className='lang-widget'>
                                    <span className='title'>
                                        selectionner la langue
                                    </span>
                                    <select value="fr" onChange={ e => {
                                            changeLanguageTrigger(e);
                                            hideMobileMenu();
                                    }}>
                                        <option value="fr">français</option>
                                        <option value="fr">anglais</option>
                                    </select>
                                </div>
                                <div className='lang-widget'>
                                    <span className='title'>
                                        selectionner la devise
                                    </span>
                                    <select value="fr" onChange={ e => {
                                            changeCurrencyTrigger(e);
                                            hideMobileMenu();
                                    }}>
                                        <option value="usd">usd</option>
                                        <option value="xof">cfa</option>
                                        <option value="euro">euro</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='mobile-contact'>
                            <div className='wrapper'>
                                <div className='contact-widget'>
                                   
                                        <Link tel="tel://12452456012">
                                            <i className='fa fa-phone'></i>
                                             <span>
                                                 +1 232 222 080
                                            </span>
                                        </Link>
                                    
                                </div>
                                <div className='contact-widget'>
                                    
                                        <Link href="mailto:info@yourdomain.com">
                                            <i className='fa fa-envelope'></i>
                                            <span>
                                                 info@yourdomain.com
                                            </span>
                                        </Link>
                                    
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