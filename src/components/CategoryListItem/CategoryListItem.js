import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleActiveCategory } from '../../store/slices/categoriesSlice/categoriesSlice';
import './CategoryListItem.css'

const CategoryListItem = ({title, isActive, id}) => {
    const dispatch = useDispatch()
    return (
        <li className='CategoryListItem' onClick={() => dispatch(toggleActiveCategory(id))}  >
                <button 
                className={isActive ? 'CategoryListBtn ActiveCategoryListBtn' : 'CategoryListBtn' }
                >
                </button>
                <span className='CategoryListItemSpan'>{title}</span>
        </li>
    );
}

export default memo(CategoryListItem);
