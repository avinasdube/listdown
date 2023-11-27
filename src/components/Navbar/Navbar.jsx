import React from 'react';
import './Navbar.scss';

import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import ModeToggle from '../ModeToggle/ModeToggle';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="leftArea"><Logo /></div>
            <div className="rightArea"> <ModeToggle /> <Searchbar /></div>
        </div>
    )
}

export default Navbar;