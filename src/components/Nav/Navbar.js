import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="top-nav">
            <div className="left-side">
                <a href="/" className="logo"><h1>Shortly</h1></a>

                <div className="left-links">
                    <a href="/">Features</a>
                    <a href="/">Pricing</a>
                    <a href="/">Resources</a>
                </div>
            </div>

            <div className="right-side" >
                <a href="/">Login</a>
                <button className="right-btn">Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar;
