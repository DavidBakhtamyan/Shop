import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectSearch, toggleSearch } from '../../store/slices/searchSlice/searchSlice';

const FilterSearch = () => {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()
    return (
            <div className="SearchInputContainer">
                <input type="text" placeholder='Search here...' className='FilterSectionSearch' value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))}/>
                <svg className='FilterSectionSearchSvg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
    );
}

export default FilterSearch;
