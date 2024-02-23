import './ProductCard.css'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addToCart, addToWishList, removeWishList, selectUsers } from '../../store/slices/usersSlice/usersSlice'
import { memo } from 'react'
import { useDispatch } from 'react-redux'


const ProductCard = (props) => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const handleAddtoWishList = () => {
        if(!currentUser) return navigate('/') 
        if(currentUser.wishList.findIndex(el => el.id === props.id) + 1){
            dispatch(removeWishList(props.id))
        } 
        else{
            dispatch(addToWishList({...props})) 
        }
    }
    const handleNavigate = () => {
        navigate(props.id)
    }
    const handleAddtoCart = () => {
        if(currentUser){
            dispatch(addToCart({...props}))
        }
        else navigate('/')
    }
    return (
        <div className='ProductCard'>
            <div className="ProductImg" >
                <img src={props.image} alt="" className='MainImage' onClick={handleNavigate}/>
                <ul className='ProductOptions'>
                    <li onClick={handleAddtoWishList}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={currentUser?.wishList.findIndex(el => el.id === props.id) + 1 ? "ActiveHeartSVG" : "HeartSVG"}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                    </li>
                    <li onClick={handleNavigate}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </li>
                    <li onClick={handleAddtoCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </li>
                </ul>
                <div className="ProductRating">
                    <span>{props.rating.rate}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0F8FAC" strokeLinecap="round" strokeLinejoin="round" >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>           
                    </span>
                    <span>{props.rating.count}</span>
                </div>
                <ul className="Thumbnails">
                    <li className='ActiveThunbnail'><img src={props.image} alt="" /></li>
                    <li><img src={props.image} alt="" /></li>
                    <li><img src={props.image} alt="" /></li>
                    <li><img src={props.image} alt="" /></li>
                </ul>
            </div>
            <div className="ProductInfo">
                <div className="Naming">
                    <p>{props.category}</p>
                    <p>{props.title}</p>
                </div>
                <div className="Price">
                    <span>${props.price}.00</span>
                    <span>${props.oldPrice}.00</span>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductCard);
