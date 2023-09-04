import React from "react";
import BannerSingle from "../../components/banner/BannerSingle";
import { multilanguage } from "redux-multilanguage";
import { useSelector } from 'react-redux'

const Banner = ({ strings }) => {
  const currency = useSelector((state) => state.currencyData);

  const banner_img = [
    {
      img: "./assets/img/banner/banner-1.jpg",
      title: `${strings["garcons"]}`,
      price: ` ${ (currency.currencyRate * 100) } `,
    },
    {
      img: "./assets/img/banner/banner-2.jpg",
      title: `${strings["filles"]}`,
      price: ` ${ (currency.currencyRate * 150) } `,
    },
    {
      img: "./assets/img/banner/banner-3.jpg",
      title: `${strings["bebe"]}`,
      price: ` ${ (currency.currencyRate * 80) } `,
    },
  ];
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          {banner_img.map((banner, i) => {
            return <BannerSingle key={i} data={banner} strings={strings} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default multilanguage(Banner);
