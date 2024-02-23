import FilterSection from "../FilterSection/FilterSection";
import NewColBanner from "../NewColBanner/NewColBanner";
import ProductList from "../ProductList/ProductList";
import './Shop.css'
import Banner from "../Banner/Banner";
const Shop = () => {
    return (
        <div className="Shop">
            <Banner title={'Shop'} />
            <div className="ShopContent">
                <FilterSection />
                <div className="ShopContentProducts ">
                <NewColBanner />
                <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Shop;
