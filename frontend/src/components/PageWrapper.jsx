import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';


const PageWrapper = ({children, loggedIn, setLoggedIn }) => (

    <div id="page-top">
    <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    {children}     
    <Footer/>
    </div>
  
);

export default PageWrapper;
