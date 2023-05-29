import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product , clickDltBtn }) => {
    const { id, img, name, price, quantity } = product;

 
    return (
        <div className='review-box'>
            <div className='img-text'>
                <img src={img} alt="" />

                <div className='text'>
                    <h3>{name}</h3>
                    <p> Price : <span>${price}</span></p>
                    <p> Quantity : <span>{quantity}</span> </p>
                </div>


            </div>

            <div className='dlt-div'>
                <button className='dlt-btn' onClick={() => clickDltBtn(id)}>
                    <FontAwesomeIcon className='icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;