import React, { useState } from 'react';
import SignUpBtn from '../Buttons/SignUpBtn';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';

const Navbar = () => {

    const [open, SetOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        SetOpen(!open);
        console.log("burger clicked")
    }

    return (
        <nav className="top-nav">
            <a href="/" className="logo"><h1>Shortly</h1></a>
            <div className="menu-icon-ctnr">
            <a href="/" onClick={handleClick}><FaBars className="fa-bars" /></a>
            </div>
            <div className={open ? 'menu-items active' : 'menu-items'}>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Resources</a>
                <hr />
                <div className="menu-items-right">
                    <a href="/" className="menu-item-right">Login</a>
                    <a href="/" className="cta-btn menu-item-right"><SignUpBtn /></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
