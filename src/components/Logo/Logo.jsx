import React from 'react';
import './Logo.scss';

import tick from '../../assets/logotick.png';

const Logo = () => {
    return (
        <div className='logoContainer'>
            <div className="heading">ListDown</div>
            <img src={tick} alt=''></img>
        </div>
    )
}

export default Logo