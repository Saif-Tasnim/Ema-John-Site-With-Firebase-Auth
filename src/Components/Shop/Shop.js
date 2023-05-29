import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Order from '../Order/Order';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 : get Id from shopping cart
        for (const id in storedCart) {

            // step-2 : find the product using id
            const addedCart = products.find(product => product.id === id);

            if (addedCart) {

                // step-3 : set quantity
                const quantity = storedCart[id];

                // console.log(quantity);

                addedCart.quantity = quantity;

                // console.log(addedCart);

                // step-4 : stored in savedCart
                savedCart.push(addedCart);

            }

        }
        // step-5 : added to cart from local storage
        setCarts(savedCart);
    }, [products])

    const [carts, setCarts] = useState([]);


    const handleCart = (product) => {
        // console.log(product.name, "added to the cart");

        let newCart = [];

        const exist = carts.find(pd => pd.id === product.id);

        if (!exist) {
            product.quantity = 1;
            newCart = [...carts, product];
        }

        else {
            exist.quantity += 1;
            const remains = carts.filter(pd => pd.id !== product.id);

            newCart = [...remains, exist];
        }

        setCarts(newCart);
        addToDb(product.id)
    }


    const clickClearBtn = () => {
        setCarts([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Order
                    cart={carts}
                    clickClearBtn={clickClearBtn}
                >
                    <Link to="/order" className='proceed-link'>

                        <button className='comon'>

                            <span className='proceed-btn'>Review Order </span>

                            <FontAwesomeIcon className='icon' icon={faArrowRight} />

                        </button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Shop;