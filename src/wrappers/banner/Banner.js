import React from 'react'
import { Link } from 'react-router-dom';

const banner_img = [{
   "img" : "./assets/img/banner/banner-1.jpg",
    "title" :"garçons",
    "price" : "1000 XOF"
},
{
  "img"  : "./assets/img/banner/banner-2.jpg",
  "title" :"filles",
    "price" : "2000 XOF"

},
{
   "img" : "./assets/img/banner/banner-3.jpg",
   "title" :"bébé",
   "price" : "3000 XOF"
}
  ];

const Banner = () => {
  return (
    <div className='banner-area'>
        <div className='container'>
            <div className='row'>
            {banner_img.map((banner, i) => {
                return (
                <div key={i} className='col-12 col-md-4'>
                    <div className='single-banner'>
                        <Link to="/" className='img-holder'>
                            <img src={banner.img} className='img-fluid'/>
                        </Link>
                        <div className='banner-content'>
                            <h3>
                                {banner.title}
                            </h3>
                            <h4>
                                à partir de <span>{banner.price} </span>
                            </h4>
                            <Link to="/" className=''>
                                <i className='fa fa-long-arrow-right'>
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
                )}
            )}
            </div>
        </div>
    </div>
  )
}

export default Banner