import React from 'react';
import './Searchbar.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchWord } from '../../reducers/filterReducers'

import search from '../../assets/search.png';

const Searchbar = () => {
    const dispatch = useDispatch();

    const currentMode = useSelector(state => state.mode.currentMode);

    return (
        <div className={`searchContainer ${currentMode === 'dark' ? 'active' : ''}`}>
            <img src={search} alt=''></img>
            <input type='text' placeholder='Search tasks..' onChange={(e)=>dispatch(setSearchWord(e.target.value))}></input>
        </div>
    )
}

export default Searchbar