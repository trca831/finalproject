import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';


const PageWrapper = ({children}) => (

    <div id="page-top">
    <Navigation/>
    {children}     
    <Footer/>
    </div>
  
);

export default PageWrapper;
