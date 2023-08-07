import React, { Fragment } from 'react'



const testimonials = [{
    "img" : "./assets/img/testimonial/testi-1.png",
    "text" :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "author" : "Adande Sylvain",
    "job" : "concepteur"
},
{
    "img" : "./assets/img/testimonial/testi-1.png",
    "text" :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "author" : "Adande Sylvain",
    "job" : "concepteur"
},
];

const Testimonial = () => {
  return (
        <Fragment>
            <div className='testimonial-area bg-gray-3'>
                <div className='container'>
                    <div className='wrapper-testimonial'>
                        {
                            testimonials.map( (testimonial , i) => {

                                return <div key={i} className='col-12 wrapper-content'>
                                
                                <div>
                                    <img className='img-fluid' src={testimonial.img} />
                                </div>  
                                <p>
                                    {testimonial.text}
                                </p>
                                <div className='content'>
                                    <i className='fa fa-map-signs'></i>
                                    <h5> {testimonial.author}</h5>
                                    <span> {testimonial.job}</span>
                                </div>
                            </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </Fragment>
  )
}

export default Testimonial