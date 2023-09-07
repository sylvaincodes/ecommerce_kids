import React, { Fragment } from "react";
import TestimonialSingle from "../../components/testimonial/TestimonialSingle";
import Carousel from 'react-elastic-carousel';

const testimonials = [
  {
    img: "./assets/img/testimonial/1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Adande Sylvain",
    job: "concepteur",
  },
  {
    img: "./assets/img/testimonial/1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Adande Sylvain",
    job: "concepteur",
  },
];

const Testimonial = () => {
  return (
    <Fragment>
      <div className="testimonial-area bg-gray-3">
        <div className="container">
          <div className="wrapper-testimonial">


            <Carousel showArrows={false}>

            {testimonials.map((testimonial, i) => {
                return <TestimonialSingle key={i} data={testimonial} />;
            })}

            </Carousel>


          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
