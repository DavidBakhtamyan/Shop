import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'
import CartItem from '../CartItem/CartItem'
import './CartPopUp.css'

const CartPopUp = ({closePopUp}) => {
    const {currentUser} = useSelector(selectUsers)
   const handelClick = (e) => {
        if(e.target.id === 'background'){
            closePopUp()
        }
    } 
    return (
        <div className='CartPopUp' id='background' onClick={handelClick}>
            <div  className="CartPopUpContent">
                    <h1>Cart</h1>
                <div className="CartPopUpList">
                    { 
                        currentUser?.cart.map(el => <CartItem key={el.id} {...el}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(CartPopUp);
