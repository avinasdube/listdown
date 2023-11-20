import React from 'react';
import './LoadingScreen.scss';
import Logo from '../Logo/Logo';


const LoadingScreen = () => {
  return (
    <div className="container">
      <div className="subContainer">
        <span className='bg1'></span>
        <Logo />
      </div>
      <footer>
        &copy; 2023 ListDown
      </footer>
    </div>
  )
}

export default LoadingScreen