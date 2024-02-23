import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/usersSlice/usersSlice';
import DropdownCart from '../DropdownCart/DropdownCart';
import DropdownUser from '../DropdownUser/DropdownUser';
import DropdownWishList from '../DropdownWishList/DropdownWishList';
import FooterNavBtns from '../FooterNavBtns/FooterNavBtns';
import './NavBtns.css'

const NavBtns = ({ setSearchBoxActive }) => {
    const { currentUser } = useSelector(selectUsers)
    return (
        <>
            <ul className='NavBtns'>
                <li className='Search'>
                    <button className='SearchBtn' onClick={() => setSearchBoxActive(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </li>
                <li className='User'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <DropdownUser />
                </li>
                <li className='WishList'>
                    <span className='Counter'>{currentUser? currentUser?.wishList.length : 0 }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <DropdownWishList />
                </li>
                <li className='Cart'>
                    <span className='Counter'>{currentUser? currentUser?.cart.reduce((acc, el) => acc + el.count, 0) : 0}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <DropdownCart />
                </li>
            </ul>
            <FooterNavBtns />
        </>
    );
}

export default memo(NavBtns);
