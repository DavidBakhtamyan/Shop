import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.css'

const NavList = ({hamburgerActive, setHamburegerActive}) => {
    const toggleHamburgerMenu = () =>{
        setHamburegerActive(false)
    }
    return (
        <> 
            <div className={hamburgerActive ?"HamburgerMenuBackgroundActive HamburgerMenuBackground" :  "HamburgerMenuBackground"} onClick={toggleHamburgerMenu} ></div>
            <div className={hamburgerActive ?"HamburgerMenuNavListActive HamburgerMenuNavList" :  "HamburgerMenuNavList"}>
                    <div className="HamburgerMenuControls">
                        <span>Menu</span>
                        <button onClick={toggleHamburgerMenu} >x</button>
                    </div>
                    <ul className='NavListUl'>
                        <li><NavLink to={'/main'}>Home</NavLink></li>
                        <li><NavLink to={'/main/shop'}>Shop</NavLink></li>
                        <li>Product</li>
                        <li>Pages</li>
                        <li>Blog</li>   
                    </ul>
            </div>

        </>
    );
}

export default memo(NavList);
