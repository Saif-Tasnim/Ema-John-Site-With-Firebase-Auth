import React, { useState } from 'react';
import Order from '../Order/Order';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



const Orders = () => {
    const cart = useLoaderData();
    // console.log(cart);
    const [total, setTotal] = useState(cart);

    const clickDltBtn = (id) => {
        // console.log("deleted the product ", id);
        const remaining = total.filter(to => to.id !== id);
        setTotal(remaining);
        removeFromDb(id);
    }

    const clickClearBtn = () => {
        setTotal([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    total.map(pd => <ReviewItem
                        key={pd.id}
                        product={pd}
                        clickDltBtn={clickDltBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Order cart={total}
                    clickClearBtn={clickClearBtn}
                >
                    <Link to="/checkout" className='proceed-link'>
                        <button className='comon'>
                            <span className='proceed-btn'>Proceed Cart  </span>

                            <FontAwesomeIcon className='icon' icon={faCartPlus} />

                        </button>
                    </Link>

                </Order>
            </div>
        </div>
    );
};

export default Orders;