/* eslint-disable react-hooks/exhaustive-deps */
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectProducts, toggleCurrentProduct } from '../../store/slices/productsSlice/productsSlice';
import { addToCart, addToWishList, selectUsers } from '../../store/slices/usersSlice/usersSlice';
import Banner from "../Banner/Banner";

import './SingleProduct.css'

const SingleProduct = () => {
    const navigate = useNavigate()
    const { currentUser } = useSelector(selectUsers)
    const { id } = useParams()
    const dispatch = useDispatch()
    const { currentProduct, productsData } = useSelector(selectProducts)
    useEffect(() => {
        dispatch(toggleCurrentProduct(id))
    }, [productsData])
    return (
        <div className='SingleProduct'>
            <Banner title={"Product"} />
            <div className='SingleProductContent'>
                <div className="SingleProductImg">
                    <img src={currentProduct?.image} alt="" />
                </div>
                <div className="SingleProductInfo">
                    <div className="SingleProductHeading">
                        <h2 >{currentProduct?.title}</h2>
                        <div className="RatingContainer">
                            <Rating name="half-rating-read" defaultValue={currentProduct?.rating.rate} precision={0.5} readOnly />
                            <p> {currentProduct?.rating.count} rating</p>
                        </div>
                        <div className="Prices">
                            <p className="Price">${currentProduct?.price}.00</p>
                            <p className='OldPrice'>${currentProduct?.oldPrice}.00</p>
                        </div>
                        <p className='Description'>
                            {currentProduct?.description}
                        </p>
                    </div>
                    <div className="ProductParametrs">
                        <div className="ColorsContainer">
                            <h4>Your brand color:</h4>
                            <ul className='Colors'>
                                <li className='ColorItem pink'></li>
                                <li className='ColorItem yellow ActiveColor'></li>
                                <li className='ColorItem orange'></li>
                                <li className='ColorItem blue'></li>
                            </ul>
                        </div>
                        <div className="Size">
                            <h4>Size:</h4>
                            <ul className='Sizes'>
                                <li>S</li>
                                <li className='ActiveSize'>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Buttons">
                        <button className='AddToCart' onClick={() => currentUser ? dispatch(addToCart(currentProduct)) : navigate('/')}>Add to Cart</button>
                        <button className='AddToWishlist' onClick={() => currentUser ? dispatch(addToWishList(currentProduct)) : navigate('/')}>Add to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
