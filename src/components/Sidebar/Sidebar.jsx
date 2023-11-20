import React, { useState } from 'react';
import './Sidebar.scss';

import all from '../../assets/all.png';
import today from '../../assets/today.png';
import upcoming from '../../assets/upcoming.png';

const Sidebar = () => {
  const [section, setSection] = useState('at');

  const sections = [
    {
      id: 1,
      title: 'All',
      img: all,
      value: 'at',
    },
    {
      id: 2,
      title: 'Today',
      img: today,
      value: 'td',
    },
    {
      id: 3,
      title: 'Upcoming',
      img: upcoming,
      value: 'uc'
    }
  ]

  return (
    <div className="sidebarContainer">
      <div className="options">
        {sections.map((secton) => (
          <button className={`${secton.value === section ? 'active' : ''}`} value={secton.value} onClick={(e) => setSection(e.target.value)} key={secton.id}>
            <img src={secton.img} alt=''></img>{secton.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar