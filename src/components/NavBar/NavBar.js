import { useState } from 'react';
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import NavBtns from '../NavBtns/NavBtns';
import NavList from '../NavList/NavList';
import './NavBar.css'

const NavBar = () => {
    const [hamburgerActive, setHamburegerActive ] = useState(false)
    const [searchBoxActive, setSearchBoxActive ] = useState(false)
    return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className='LogoWrapper'>
                    <div className="HamburgerMenu" onClick={() => setHamburegerActive(true)}>
                        <span className='Bar'></span>
                        <span className='Bar'></span>
                        <span className='Bar'></span>
                    </div>
                <h1>SHOP</h1>
                </div>
                <NavList hamburgerActive={hamburgerActive} setHamburegerActive={setHamburegerActive}/>
                <NavBtns setSearchBoxActive={setSearchBoxActive} />
                <NavBarSearch searchBoxActive={searchBoxActive} setSearchBoxActive={setSearchBoxActive} />
            </div>
        </div>
    );
}

export default NavBar;
