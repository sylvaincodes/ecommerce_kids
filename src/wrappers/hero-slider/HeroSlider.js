import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [ 
  {

   "img" : "./assets/img/slider/slider-3.png" ,
   "title" : "meilleurs offres",
   "subtitle" : "collections automne 2024",
   "action" : "acheter"
    
  }
];

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        effect={"slide"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        className="mySwiper"
      >
        {slide_img.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={item.img} alt="" className="img-fluid" />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="slider-content slider-animated-1">
                      <h2 className="animation-delay-1-3 fadeInUp animated title fw-light animated">
                      {item.title}
                      </h2>
                      <h1 className="fadeInUp animated title fw-bold animated">
                      {item.subtitle}
                      </h1>
                      <div className="fadeInUp slider-btn btn-hover">
                        <Link to="/tous-les-produits" className="rounden-btn">
                        {item.action}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
