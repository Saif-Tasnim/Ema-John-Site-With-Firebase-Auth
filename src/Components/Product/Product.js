import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    // console.log(props);
    const { img, name, ratings, price, seller, id } = props.product;

    const handleCart = props.handleCart;

    return (
        <div className='card'>
            <div className='card-img'>

                <img src={img} alt="" />

            </div>

            <div className='card-body'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-rating'>Ratings : {ratings} </h4>
                <h3 className='product-price'> Price : ${price} </h3>
                <h5 className='seller'>Manufacturer : {seller}</h5>
                <button className='product-btn' onClick={() => handleCart(props.product)} >Add To Cart
                 &nbsp;<FontAwesomeIcon icon={faShoppingCart} />
                </button>

            </div>
        </div>
    );
};

export default Product;

