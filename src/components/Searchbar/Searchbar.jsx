import React from 'react';
import './Searchbar.scss';

import { useDispatch } from 'react-redux';
import { setSearchWord } from '../../reducers/filterReducers'

import search from '../../assets/search.png';

const Searchbar = () => {
    const dispatch = useDispatch();

    return (
        <div className="searchContainer">
            <img src={search} alt=''></img>
            <input type='text' placeholder='Search tasks..' onChange={(e)=>dispatch(setSearchWord(e.target.value))}></input>
        </div>
    )
}

export default Searchbar