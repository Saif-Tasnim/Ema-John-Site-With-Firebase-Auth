import React, { useContext } from 'react';
import icon from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContest } from '../../Provider/ContextApi';
import { ToastContainer, toast, Toaster } from 'react-toastify';

const Header = () => {
    const {user , logOut} = useContext(AuthContest);
    console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then(() => {
            toast.success(`Successfully Logged Out `, {
                position: toast.POSITION.TOP_CENTER,
                className: 'custom-toast',
                bodyClassName: 'custom-toast-body',
                progressClassName: 'custom-toast-progress'
              });
        })
        .catch (error => {
            console.log(error.message);
        })
    }
    
    return (
        <div className='header'>
            <Link to='/'> <img src={icon} alt="" /></Link>

            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/management">Management Inventory</Link>
                
                {
                  user ? <><Link to='/login' onClick={handleLogOut}>Log Out</Link> 
                  <ToastContainer/>
                  </> 
                  : <Link to="/login">Log In</Link>
                }
                
                

                {/* <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/management">Management Inventory</a>
                <a href="/login">Log In</a> */}


            </div>
        </div>
    );
};

export default Header;