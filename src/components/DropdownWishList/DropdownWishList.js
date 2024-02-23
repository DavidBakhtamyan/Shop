import { useSelector } from "react-redux"
import { selectUsers } from "../../store/slices/usersSlice/usersSlice"
import EmptyWishListItem from "../EmptyWishListItem/EmptyWishListItem"
import WishListItem from "../WishListItem/WishListItem"

 const DropdownWishList = () => {
    const { currentUser } = useSelector(selectUsers)
  return (
    <div className="DropdownWishList">
        {
            currentUser?.wishList.length ? currentUser.wishList.map(product => <WishListItem key={product.id} {...product}/>) : <EmptyWishListItem />
        }
    </div>
  )
}

export default DropdownWishList