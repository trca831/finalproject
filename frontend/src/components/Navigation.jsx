import React from "react"
import { Link } from "react-router-dom";
import Registration from "./auth/Registration";
import Logout from "./auth/Logout";

function Navigation({ loggedIn, setLoggedIn }) {
    const handleLogout = () => {
        setLoggedIn(false);
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                {/* <a className="navbar-brand" href="#page-top"><img src="/assets/img/navbar-logo.svg" alt="..." /></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/#team">Team</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/kits">Browse Kits</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        
                        {loggedIn ? (
                            <>
                            <li><Logout /></li>
                            </>
                        ) : (
                            <>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            </>
                        )}
                                             
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
};
export default Navigation;