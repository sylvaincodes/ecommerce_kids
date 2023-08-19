import React, { Fragment } from 'react'
import { Helmet } from "react-helmet";
import Layout from '../../layouts/Layout';
import HeroSlider from '../../wrappers/hero-slider/HeroSlider';
import Banner from '../../wrappers/banner/Banner';
import TabProduct from '../../wrappers/product/TabProduct';
import CountdownNow from '../../wrappers/countdown/CountdownNow';
import Testimonial from '../../wrappers/testimonial/Testimonial';
import Newsletter from '../../wrappers/newsletter/Newsletter';
import { useSelector } from 'react-redux'

const Home1 = () => {

  const products = useSelector(  (state) => state.productData.products );

  return (
    <Fragment>

      <Helmet>
        <meta charSet="utf-8" />
        <title> Page d'acceuil </title>
        <meta name="description" content="Page d'acceuil du site web - Ecommerce - Produits de tout genre" />
      </Helmet>

      <Layout>
          <HeroSlider/>
          <Banner/>
          <TabProduct products={products}/>
          <CountdownNow dateTime="5000"/>
          <Testimonial/>
          <Newsletter/>
      </Layout>

    </Fragment>
    )
  }
  
  export default Home1