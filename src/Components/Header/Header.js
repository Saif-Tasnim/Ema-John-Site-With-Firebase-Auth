import React from 'react';
import icon from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'> <img src={icon} alt="" /></Link>

            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/management">Management Inventory</Link>
                <Link to="/login">Log In</Link>

                {/* <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/management">Management Inventory</a>
                <a href="/login">Log In</a> */}


            </div>
        </div>
    );
};

export default Header;