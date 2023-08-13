import React, { Fragment, useState } from 'react'
import { Tab,Nav, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getDiscountPrice } from '../../helpers/product';


const product_tabs = [{
    "img" : "./assets/img/product/fashion/1.jpg",
    "name" :"jacket kid",
    "price" : "1000",
    "discount" : "0",
    "new" : true,
    "collection" : "bestsales"
},
{
    "img" : "./assets/img/product/fashion/2.jpg",
    "name" :"blazer man",
    "price" : "2000",
    "discount" : "10",
    "new" : false,
    "collection" : "bestsales"
    
},
{
    "img" : "./assets/img/product/fashion/3.jpg",
    "name" :"dress women",
    "price" : "3000",
    "discount" : "10",
    "new" : true,
    "collection" : "newarrivals"
},
{
    "img" : "./assets/img/product/fashion/4.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "newarrivals"
},{
    "img" : "./assets/img/product/fashion/5.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "newarrivals"
},{
    "img" : "./assets/img/product/fashion/6.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "newarrivals"
},{
    "img" : "./assets/img/product/fashion/7.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "newarrivals"
},,{
    "img" : "./assets/img/product/fashion/8.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "bestsales"
},,{
    "img" : "./assets/img/product/fashion/9.jpg",
    "name" :"boy women",
    "price" : "3500",
    "discount" : "10",
    "new" : true,
    "collection" : "bestsales"
},
];

const TabProduct = () => {

   
    
    return (
        <Fragment>
        <div className='product-area bg-gray-3'>
        <div className='container'>
        <div className='wrapper'>
        <Tab.Container defaultActiveKey="newarrivals">
        
        <div className='product-top-bar section-border'>
            <div className='section-title'>
                <h3 className='title'>produits populaires</h3>
            </div>
            <Nav className='product-list-nav'>
                <Nav.Item>
                    <Nav.Link eventKey="newarrivals">
                    <h6>nouvelles arrivales</h6>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="bestsales">
                    <h6>meilleures ventes</h6>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='d-flex gap-2'>
                <button className='btn btn-outline-secondary '>
                    <i className='pe-7s-angle-left '></i>
                </button>
                <button className='btn btn-outline-secondary'>
                    <i className='pe-7s-angle-right'></i>
                </button>
            </div>
        </div>
        
        <Tab.Content>
        <Tab.Pane eventKey="newarrivals">
        <div className='product-list-grid'>
        {product_tabs.map((product, i) => {
            const discountedPrice = getDiscountPrice(product.price, product.discount);
            
            if (product.collection == "newarrivals") {
            return <div key={i} className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='wrapper' >
            <div className='product-img'>
            <Link>
            <img src={product.img} className='img-fluid'/>
            <div className='product-discount'>
            {product.discount != 0
                ?
                <span className='badge bg-dark'>- {product.discount} %</span>
                :
                ""
            }
            <span className='badge bg-danger'>{product.new ? "new" : ""}</span>
            </div>
            <div className='product-action'>
            <button className='btn btn-lg btn-outline-dark rounded-circle'>
            <i className="fa fa-shopping-cart"></i>
            </button>
            <button className='btn btn-lg btn-outline-dark rounded-circle'>
            <i className="pe-7s-shuffle"></i>
            </button>
            </div>
            </Link>
            </div>
            <div className='product-content'>
            <div className='d-flex justify-content-between'>
            <div className=''>
            <h3> 
            <Link className='title'> 
            {product.name}
            </Link>
            </h3>
            <div className='gap-2 d-flex justify-content-between'>
            <span> {discountedPrice ? discountedPrice : product.price} XOF </span>
             
            {product.discount != 0
                ?
                <del className='text-danger'>   {product.price}  XOF</del>
                :                
                ""
            }

            </div>
            </div>
            <div>
            <i className='pe-7s-like active'></i>
            </div>
            </div>
            </div>
            </div>
            </div>
            }
        })}
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="bestsales">
        <div className='product-list-grid'>
        {product_tabs.map((product, i) => {
            const discountedPrice = getDiscountPrice(product.price, product.discount);
            
            if (product.collection == "bestsales") {
            return <div key={i} className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='wrapper'>
            <div className='product-img'>
            <Link>
            <img src={product.img} className='img-fluid'/>
            <div className='product-discount'>
            {
                product.discount != 0
                ?
                <span className='badge bg-dark'>- {product.discount} %</span>
                :
                ""
            }
            <span className='badge bg-danger'>{product.new ? "new" : ""}</span>
            </div>
            <div className='product-action'>
            <button className='btn btn-lg btn-outline-dark rounded-circle'>
            <i className="fa fa-shopping-cart"></i>
            </button>
            <button className='btn btn-lg btn-outline-dark rounded-circle'>
            <i className="pe-7s-shuffle"></i>
            </button>
            </div>
            </Link>
            </div>
            <div className='product-content'>
            <div className='d-flex justify-content-between'>
            <div className=''>
            <h3> 
            <Link className='title'> 
            {product.name}
            </Link>
            </h3>
            <div className='gap-2 d-flex justify-content-between'>
            <span> {discountedPrice ? discountedPrice : product.price} XOF </span>
            
            {
                product.discount != 0
                ?
                <del className='text-danger'>   {product.price}  XOF</del>            
                :  
                ""
            }
            
            </div>
            </div>
            <div>
            <i className='pe-7s-like active'></i>
            </div>
            </div>
            </div>
            </div>
            </div>
            }
        })}
        </div>
        </Tab.Pane>
        </Tab.Content>
        
        </Tab.Container>
        </div>
        </div>
        </div>
        </Fragment>
        )
    }
    
    export default TabProduct