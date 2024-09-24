import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';


const PageWrapper = ({children, loggedIn, setLoggedIn, setUser, user }) => (

    <div id="page-top">
    <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} user={user} />
    {children}     
    <Footer/>
    </div>
  
);

export default PageWrapper;
