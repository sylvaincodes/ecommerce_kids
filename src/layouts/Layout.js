import React, {
    Fragment
} from 'react'
import Header from '../wrappers/header/Header'
import Footer from '../wrappers/footer/Footer'
const Layout = ({ children }) => {
    return (
        <Fragment>
        <Header></Header>
        { children }
        <Footer></Footer>
        </Fragment>
        )
    }
    
    export default Layout