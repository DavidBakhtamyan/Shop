import Img from '../../images/images';
import HomeBannerCard from '../HomeBannerCard/HomeBannerCard';
import './HomeHeader.css'

const HomeHeader = ({visible, idx}) => {
    return (
            <div className='HomeHeader each-slide-effect'>
                <img className="HomeBanner" src={Img.homeBanner} alt="" />
                <img className="BannerImg1" src={Img.banner1} alt="" />
                <div className="HeaderText">
                    <h1 className="Heading">
                            Find your Latest <span className="HeadingCollection"> Collection </span><br /> of favorite Styles here
                    </h1>
                    <p>
                        We try to provide the best for our customers and try to make sure we always <br /> provide the best service for you.
                    </p>
                    <button className="ShopBtn">Shop</button>
                </div>
                <img  className="BannerImg2" src={Img.banner2} alt="" />
                    <HomeBannerCard visible={visible} idx={idx}/>
            </div>
    );
}

export default HomeHeader;
