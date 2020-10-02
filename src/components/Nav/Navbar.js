import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [open, SetOpen] = useState(false);

    
    
    const handleClick = (e) => {
        e.preventDefault();
        SetOpen(!open);
    }

    return (
        <nav className="top-nav">
            <div className="navbar-items">
            <div className="left-side">
                <a href="/" className="logo"><h1>Shortly</h1></a>
                
                <div className="left-side">
                    <div className="left-side-links">
                        <a href="/">Features</a>
                        <a href="/">Pricing</a>
                        <a href="/">Resources</a>
                    </div>
                </div>
            </div>

            <div className="right-side" >
                <div className="right-side-links">
                    <a href="/">Login</a>
                    <button className="right-btn">Sign Up</button>

                </div>
                <div className="menu-icon-ctnr" onClick={handleClick}>
                    <FaBars className="menu-icon" />
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
