import React from 'react';
import './Sidebar.scss';

import tommorow from '../../assets/all.png';
import today from '../../assets/today.png';
import upcoming from '../../assets/upcoming.png';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from '../../reducers/filterReducers';

const Sidebar = () => {

  const dispatch = useDispatch();

  const sections = [
    {
      id: 1,
      title: 'Today',
      img: today,
    },
    {
      id: 2,
      title: 'Tommorow',
      img: tommorow,
    },
    {
      id: 3,
      title: 'Upcoming',
      img: upcoming,
    }
  ]

  const activeFilter = useSelector(state => state.labels.activeFilter);

  return (
    <div className="sidebarContainer">
      <div className="options">
        {sections.map((secton) => (
          <button
            className={`${secton.title === activeFilter ? 'active' : ''}`}
            onClick={() => dispatch(setActiveFilter(secton.title))}
            key={secton.id}>
            <img src={secton.img} alt=''></img>
            {secton.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar