import React, { Fragment } from 'react'
import { Helmet } from "react-helmet";
import Layout from '../../layouts/Layout';
import HeroSlider from '../../wrappers/hero-slider/HeroSlider';

const Home1 = () => {
  return (
    <Fragment>

      <Helmet>
        <meta charSet="utf-8" />
        <title> Page d'acceuil </title>
      </Helmet>

      <Layout>
          <HeroSlider/>
      </Layout>

    </Fragment>
    )
  }
  
  export default Home1