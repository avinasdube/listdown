import React from 'react';
import './ModeToggle.scss';

import lightMode from '../../assets/lightmode.png';
import darkMode from '../../assets/darkmode.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMode } from '../../reducers/modeReducer';

const ModeToggle = () => {

    const dispatch = useDispatch();

    const currentMode = useSelector(state => state.mode.currentMode);

    const handlemode = () => {
        currentMode === 'light' ? dispatch(setCurrentMode('dark')) : dispatch(setCurrentMode('light'))
    }

    return (
        <div className="toggleContainer">
            <img src={`${currentMode === 'dark' ? lightMode : darkMode}`} alt='' onClick={handlemode}></img>
        </div>
    )
}

export default ModeToggle