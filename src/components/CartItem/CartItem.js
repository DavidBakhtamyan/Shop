import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { decCartItemCount, incCartItemCount, removeFromCart } from '../../store/slices/usersSlice/usersSlice';
import './CartItem.css'

const CartItem = ({id, title, image, price, count}) => {
    const dispatch = useDispatch()
    return (
        <div className='CartItem'>
            <div className="CartItemContent">
                <img src={image} alt="" />
                <div className="CartItemInfo">
                    <h5>{title}</h5>
                    <span>${price}.00</span>
                    <div className='CardItemAmount'>
                        <button onClick={() => dispatch(decCartItemCount(id))}>-</button>
                        <span>{count}</span>
                        <button onClick={() => dispatch(incCartItemCount(id)) }>+</button>
                    </div>
                </div>
            </div>
            <span onClick={() => dispatch(removeFromCart(id))}>X</span>
        </div>
    );
}

export default memo(CartItem);
