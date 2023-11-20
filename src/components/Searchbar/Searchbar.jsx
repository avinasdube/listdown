import React from 'react';
import './Searchbar.scss';

import search from '../../assets/search.png';

const Searchbar = () => {
    return (
        <div className="searchContainer">
            <img src={search} alt=''></img>
            <input type='text' placeholder='Search tasks..'></input>
        </div>
    )
}

export default Searchbar