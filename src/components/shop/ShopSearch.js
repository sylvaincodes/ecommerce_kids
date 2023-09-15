import React from "react";
import {multilanguage} from 'redux-multilanguage'
import {useSelector} from 'react-redux'

const ShopSearch = ({strings,setCurrentData}) => {

  const products = useSelector( state  => state.productData.products);
  const handleSearch = (e) =>{
    const valueInput = e.target.value.toLowerCase();
      const productsFilter = products.filter( (item) => item.name.includes(valueInput) );
      setCurrentData(productsFilter);
  }
  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['recherche']}</h4>
      <div className="sidebar-search">
          <form className="sidebar-search-form">
              <input onChange={e=> handleSearch(e)} placeholder={strings['recherche_ici']} type="text"/>
              {/* <button className="btn">
                  <i className="fa fa-search"></i>
              </button> */}
          </form>
      </div>
    </div>
  )
};

export default multilanguage(ShopSearch);
