import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = ({title}) => {
    return (
        <div className='ShopBanner'>
            <div className="ShopHeader">
                <h1>{title}</h1>
                <div className="ShopLinks">
                    <Link to='/main' className='HomeLink'>Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span className="ActiveShopLink">{title}</span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
