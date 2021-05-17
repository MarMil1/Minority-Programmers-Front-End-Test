import React, { useState } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo">
                        MP
                    </Link>
                    <div className="social-media">
                        <i className="fab fa-twitter fa-lg"></i>
                        <i className="fab fa-facebook-square fa-lg"></i>
                        <i className="fab fa-linkedin fa-lg"></i>
                        <i className="fab fa-instagram fa-lg"></i>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Get Built
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                                Learn
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Join
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
