import React from 'react';
import logo from "../../images/logo.jpg";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <br/>
            <h1><img style={{width: '80px'}} src={logo} alt="Premium Shop Logo"/> প্রিমিয়াম শপ</h1>
            <br/>
        </div>
    );
};

export default Header;