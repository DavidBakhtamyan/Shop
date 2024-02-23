/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categoriesSlice/categoriesAPI';
import { selectCategories } from '../../store/slices/categoriesSlice/categoriesSlice';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { selectPriceCntrl, toggleMax, toggleMin } from '../../store/slices/priceCntrlSlice/priceCntrlSlice';
import { selectProducts } from '../../store/slices/productsSlice/productsSlice';
import { useMemo } from 'react';
import './FilterSection.css'
import AppliedFilters from '../ApliedFilters/AppliedFilters';
import FilterSearch from '../FilterSearch/FilterSearch';

const FilterSection = () => {
    const [sidebarFilterStatus, setSidebarFilterStatus] = useState(false);
    const { productsData } = useSelector(selectProducts)
    const categories = useSelector(selectCategories)
    const {max, min} = useSelector(selectPriceCntrl)
    const dispatch = useDispatch()

    const maxP = useMemo(() => {
        return productsData.map(el => el.price).sort((a,b)=> a - b).at(-1)
    },[productsData])

    useEffect(() => {
        dispatch(toggleMax(maxP))
    },[maxP])

    useEffect(() => {
        if(!categories.length){
            dispatch(fetchCategories())
        }
    },[categories])

    const removeSidebarFilter = () => {
        setSidebarFilterStatus(false)
    }
    return (
        <>
            <button className='ToggleFilterBtn' onClick={() => setSidebarFilterStatus(true)}>Filter</button>
            <div className={sidebarFilterStatus? "SideBarFilterBG" : ""} onClick={removeSidebarFilter}></div>
            <div className={sidebarFilterStatus ?'FilterSection sidebarFilter' : 'FilterSection'} >
            <FilterSearch />
            <AppliedFilters />
            <h3 className='FilterSectionHeading'>Filter</h3>
            <div className="PriceCntrl">
                <div className="price-input">
                    <div className="field">
                        <span>Min <span className='dollar'>$</span></span>
                        <input type="number" className="input-min" value={min} onChange={(e) => dispatch(toggleMin(e.target.value))}/>
                    </div>
                    <div className="minus">_</div>
                    <div className="field">
                        <span> Max <span className='dollar'>$</span></span>
                        <input type="number" className="input-max" value={max} onChange={(e) => dispatch(toggleMax(e.target.value))}/>
                    </div>
                </div>
                <RangeSlider 
                max={productsData.map(el => el.price).sort((a,b)=> a - b).at(-1)}
                value={[min, max]}
                step={1}
                onInput={(values) =>{
                    dispatch(toggleMin(values[0]))
                    dispatch(toggleMax(values[1]))
                }}
                />
            </div>
                <div className="Categories">
                    <h3 className='CategoriesHeading'>Categories</h3>
                    <ul className='CategoriesList'>
                        {
                            categories?.map(category => <CategoryListItem key={category.id} {...category}/>)
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FilterSection;
