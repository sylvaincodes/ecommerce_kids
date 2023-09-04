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
import { multilanguage } from 'redux-multilanguage'

const Home1 = ({strings}) => {

  const products = useSelector(  (state) => state.productData.products );

  return (
    <Fragment>

      <Helmet>
        <meta charSet="utf-8" />
        <title> { process.env.REACT_APP_SITE_NAME }  - Page d'acceuil </title>
        <meta name="description" content={strings['homepage_description']}/>
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
  
  export default multilanguage(Home1)