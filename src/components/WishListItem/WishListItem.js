import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { removeWishList } from '../../store/slices/usersSlice/usersSlice'
import './WishListItem.css'

const WishListItem = ({id, title, image, price}) => {
    const dispatch = useDispatch()
  return (

    <div className='CartItem'>
        <img src={image} alt="" />
        <div className="CartItemInfo">
            <h5>{title}</h5>
            <span>${price}.00</span>
        </div>
        <span onClick={() => dispatch(removeWishList(id))}>X</span>
    </div>
  )
}

export default memo(WishListItem)