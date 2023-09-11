import React from "react";
import { Swiper } from "swiper/react";
import SectionTitle from "../section-title/SectionTitle";
import ProductGrid from "../../wrappers/product/ProductGrid";
import { multilanguage } from 'redux-multilanguage'


const RelatedProduct = ({ category, strings }) => {

  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="related-products-area">
      <div className="row">
        <SectionTitle
          titleText={strings['produits_populaires']}
          subtitleText=""
          subtitleColorClass=""
        />
      </div>

      <div className="row">
        <Swiper 
                {...settings} 
                spaceBetween={20}
                pagination={{ clickable: true }}
          >
          <ProductGrid
            category={category}
            limit={9}
            sliderClassName="swiper-slide"
          />
        </Swiper>
      </div>
    </div>
  );
};

export default multilanguage(RelatedProduct);
