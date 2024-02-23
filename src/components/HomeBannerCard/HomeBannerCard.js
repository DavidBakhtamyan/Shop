import Img from '../../images/images';
import './HomeBannerCard.css'

    const HomeBannerCard = ({visible, idx}) => {
    return (
        <div className={visible[idx] ? "HomeBannerCards visibleBnner" :"HomeBannerCards "} >
            <div className="HomeBannerCard firstHomeBannerCard">
                <div className="HomeBannerCardImgContainer">
                    <img className="HomeBannerCardImg" src={Img.bannerCard1} alt="" />
                </div>
                <div className="homeBannerCardprice">
                    <div className="HomeBannerCardInfo">
                        <h5 className="HomeBannerCardtitle">Winter Jacet</h5>
                        <p className="HomeBannerCardCategory">Oozio style</p>
                    </div>
                    <p className="HomeBannerCardPriceP">$130.00</p>
                </div>
            </div>
            <div className="HomeBannerCard secondHomeBannerCard">
                <div className="HomeBannerCardImgContainer">
                    <img className="HomeBannerCardImg" src={Img.bannerCard2} alt="" />
                </div>
                <div className="homeBannerCardprice">
                    <div className="HomeBannerCardInfo">
                        <h5 className="HomeBannerCardtitle">Womens Shirt</h5>
                        <p className="HomeBannerCardCategory">Bluezone</p>
                    </div>
                    <p className="HomeBannerCardPriceP">$110.00</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBannerCard;
