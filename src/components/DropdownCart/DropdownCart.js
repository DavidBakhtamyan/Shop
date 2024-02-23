import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import showPopUp from '../../hoc/showPopUp';
import CartPortal from '../../portals/cartPortal';
import { selectUsers } from '../../store/slices/usersSlice/usersSlice';
import CartItem from '../CartItem/CartItem';
import CartPopUp from '../CartPopUp/CartPopUp';

const DropdownCart = ({isShow, toggleIsShow}) => {
    const { currentUser } = useSelector(selectUsers)
    return (
        <div className="DropdownCart">
            <div className="CartItemList">
                    {
                        currentUser?.cart.map(product => <CartItem key={product.id} {...product}/>)
                    }
            </div>
            <div className="DropdownCartFooter">
                <button onClick={toggleIsShow} >View Cart</button>
            </div>
            {
            isShow && 
            <CartPortal>
                <CartPopUp closePopUp={toggleIsShow}/>
            </CartPortal>
            }
         </div>
    );
}

export default memo(showPopUp(DropdownCart));
