import React, { Fragment } from 'react'

const Header = () => {
  return (
    <header className='header-area'>

        <div className='header-top-area'>
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

        </div>

    </header>
  )
}

export default Header