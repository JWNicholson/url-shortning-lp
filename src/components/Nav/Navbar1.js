import React, { useState,useEffect } from 'react';
import SignUpBtn from '../Buttons/SignUpBtn';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';



const Navbar = () => {
    const [open, SetOpen] = useState(false);

    
    
    const handleClick = (e) => {
        e.preventDefault();
        SetOpen(!open);
    }

    return (
        <nav className="top-nav">
            <a href="/" className="logo"><h1>Shortly</h1></a>
           
            <div className={ open ? 'menu-items active' : 'menu-items'}>
                <div className="menu-items-left">
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Resources</a>
                </div>
               
                <hr />
                <div className="menu-items-right">
                    <a href="/" className="menu-item-right">Login</a>
                    <div href="/" className="cta-btn menu-item-right"><SignUpBtn /></div>
                </div>
            </div>

            <div className="menu-icon-ctnr">
            <div onClick={handleClick}><FaBars className="fa-bars" /></div>
            </div>
        </nav>
    );
}

export default Navbar;
