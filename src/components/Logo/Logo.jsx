import React from 'react';
import './Logo.scss';

import tick from '../../assets/logotick.png';
import { useSelector } from 'react-redux';

const Logo = () => {
    const currentMode = useSelector(state => state.mode.currentMode);
    return (
        <div className={`logoContainer ${currentMode === 'dark' ? 'active' : ''}`}>
            <div className="heading">ListDown</div>
            <img src={tick} alt=''></img>
        </div>
    )
}

export default Logo