import React, { Children } from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Order = ({ cart , clickClearBtn, children }) => {

    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const p of cart) {
        // p.quantity = p.quantity || 1;
        // console.log(p.price);
        total += p.price * p.quantity;
        shipping += shipping + p.shipping;
        quantity += p.quantity;
    }

    const tax_num = total * 0.07;
    const tax = tax_num.toFixed(2);

    const grand = total + shipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summary </h1>
            <p> Selected Items : {quantity}</p>
            <p>Product Price : $ {total} </p>
            <p>Total Shipping : {shipping} </p>
            <p>Tax :  {tax} </p>
            <h4>Grand Total Price : {grand} </h4>

            <button onClick={clickClearBtn} className='dlt-btn-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon className='icon' icon={faTrashAlt} />
            </button>
         
         {children}
           
        </div>
    );
};

export default Order;