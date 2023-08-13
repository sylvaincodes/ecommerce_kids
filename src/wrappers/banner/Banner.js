import React from "react";
import BannerSingle from "../../components/banner/BannerSingle";

const banner_img = [
  {
    img: "./assets/img/banner/banner-1.jpg",
    title: "garçons",
    price: "1000 XOF",
  },
  {
    img: "./assets/img/banner/banner-2.jpg",
    title: "filles",
    price: "2000 XOF",
  },
  {
    img: "./assets/img/banner/banner-3.jpg",
    title: "bébé",
    price: "3000 XOF",
  },
];

const Banner = () => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          {banner_img.map((banner, i) => {
            return <BannerSingle key={i} data={banner} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
