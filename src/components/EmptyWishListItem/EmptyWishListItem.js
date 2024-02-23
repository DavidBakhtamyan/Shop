import Img from "../../images/images"
import "./EmptyWishListItem.css"

const EmptyWishListItem = () => {
  return (
    <div className="EmptyWishListItem">
        <img src={Img.emptyWishList} alt="" />
        <h3>Your wishlist is empty !!</h3>
        <span>explore more and shortlist items.</span>
    </div>
  )
}

export default EmptyWishListItem