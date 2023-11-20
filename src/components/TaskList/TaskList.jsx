import React from 'react';
import './TaskList.scss';

import edit from '../../assets/edit.png';
import remove from '../../assets/delete.png'

const TaskList = () => {
    const tasklist = [
        {
            id: 1,
            text: 'Write Assignment',
            label: 'Today',
        },
        {
            id: 2,
            text: 'Go to market',
            label: 'Upcoming',
        },
        {
            id: 3,
            text: 'Read documentation',
            label: 'Today',
        },
        {
            id: 4,
            text: 'Wash Clothes',
            label: 'Today',
        },
        {
            id: 5,
            text: 'Arrange documents',
            label: 'Upcoming',
        },
        {
            id: 6,
            text: 'Write poetry',
            label: 'Upcoming',
        },
        {
            id: 7,
            text: 'Learn about CI/CD workflows',
            label: 'Today',
        }
    ]

    return (
        <div className="listContainer">
            {tasklist.map((task) => (
                <div className="taskBox" key={task.id}>
                    <div className="content">
                        <input type='checkbox'></input>
                        <div className="details">
                            <span>{task.text}</span>
                            {task.label === 'Today' ?
                            <span className='label' style={{color: 'green'}}>{task.label}</span> :
                            <span className='label' style={{color: 'firebrick'}}>{task.label}</span>}
                        </div>
                    </div>
                    <div className="action">
                        <img src={edit} alt=''></img>
                        <img src={remove} alt=''></img>
                    </div>
                </div>))}
        </div>
    )
}

export default TaskList