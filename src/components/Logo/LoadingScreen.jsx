import React from 'react';
import './LoadingScreen.scss';

import tick from '../../assets/logotick.png';

const LoadingScreen = () => {
  return (
    <div className="container">
      <div className='logoContainer'>
        <span className="bg1"></span>
        <span className="bg2"></span>
        <div className="heading">ListDown</div>
        <img src={tick} alt=''></img>
      </div>
    </div>
  )
}

export default LoadingScreen