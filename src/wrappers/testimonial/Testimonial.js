import React, { Fragment } from "react";
import TestimonialSingle from "../../components/testimonial/TestimonialSingle";
import Carousel from 'react-elastic-carousel';

const testimonials = [
  {
    img: "./assets/img/testimonial/1.png",
    text: "Bonjour, Les voitures n’etant pas incluses, à part chien robot, savez vous lesquelles (de quelle taille) sont compatibles? Il y en a tellement de taille /marque/matières différentes! Milles mercis",
    author: "Adande Sylvain",
    job: "concepteur",
  },
  {
    img: "./assets/img/testimonial/1.png",
    text: "Bonjour, Les voitures n’etant pas incluses, à part chien robot, savez vous lesquelles (de quelle taille) sont compatibles? Il y en a tellement de taille /marque/matières différentes! Milles mercis",
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
