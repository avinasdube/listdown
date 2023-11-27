import React from 'react';
import './LoadingScreen.scss';
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';


const LoadingScreen = () => {
  const currentMode = useSelector(state => state.mode.currentMode);

  return (
    <div className={`container ${currentMode === 'dark' ? 'active' : ''}`}>
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