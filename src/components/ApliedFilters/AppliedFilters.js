import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCategories, toggleActiveCategory } from '../../store/slices/categoriesSlice/categoriesSlice';
import './AppliedFilters.css'
const AppliedFilters = () => {
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()
    const activeCategories = useMemo(() => {
        return categories.filter(el => el.isActive)
    }, [categories])
    return (
        <div className='AppliedFilters'>
            <h4>Applied Filters</h4>
            <ul>
                {
                    activeCategories.length ? activeCategories.map(el => <li key={el.id} onClick={() => dispatch(toggleActiveCategory(el.id))}>{el.title} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="AppliedFilterLiSvg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></li> ) : <h4 className='NoFilters'>No filters applied</h4>

                }
            </ul>
        </div>
    );
}

export default AppliedFilters;
