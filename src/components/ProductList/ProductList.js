/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/slices/categoriesSlice/categoriesSlice';
import { selectPriceCntrl } from '../../store/slices/priceCntrlSlice/priceCntrlSlice';
import { selectProducts } from '../../store/slices/productsSlice/productsSlice';
import { selectSearch } from '../../store/slices/searchSlice/searchSlice';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

const ProductList = () => {
    const search = useSelector(selectSearch)
    const { productsData } = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const {max, min} = useSelector(selectPriceCntrl)

    const filteredData = useMemo(() => {
        let filteredData
        if(!categories.some(el => el.isActive)){
            filteredData = productsData
        }
        else{
            filteredData = productsData?.filter(product => categories.find(category => category.title === product.category).isActive)
        }
        filteredData = filteredData?.filter(el => el.price >= min && el.price <= max)
        return filteredData.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
    },[categories, min, max, search])
    return (
        
        <div className='ProductList'>
            {
               filteredData.length ? filteredData?.map(product => <ProductCard key={product.id} {...product}/>) : <h3>No Products Found</h3>
            }
        </div>
    );
}

export default ProductList;
