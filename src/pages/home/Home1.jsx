import React, { Fragment } from 'react'
import { Helmet } from "react-helmet";
import Layout from '../../layouts/Layout';
import HeroSlider from '../../wrappers/hero-slider/HeroSlider';
import Banner from '../../wrappers/banner/Banner';
import TabProduct from '../../wrappers/product/TabProduct';
import CountdownNow from '../../wrappers/countdown/CountdownNow';
import Testimonial from '../../wrappers/testimonial/Testimonial';
import Newsletter from '../../wrappers/newsletter/Newsletter';

const Home1 = () => {
  return (
    <Fragment>

      <Helmet>
        <meta charSet="utf-8" />
        <title> Page d'acceuil </title>
      </Helmet>

      <Layout>
          <HeroSlider/>
          <Banner/>
          <TabProduct/>
          <CountdownNow dateTime="5000"/>
          <Testimonial/>
          <Newsletter/>
      </Layout>

    </Fragment>
    )
  }
  
  export default Home1