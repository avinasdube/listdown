import React from 'react';
import './NoTask.scss';

import notask from '../../assets/notask.gif';

const NoTask = ({filter}) => {
    return (
        <div className='notasks'>
            <img src={notask} alt=''></img>
            <span>No {filter.toLowerCase()} tasks found ! Start by creating a new one.</span>
        </div>
    )
}

export default NoTask