import React from 'react';
import './TaskList.scss';

import edit from '../../assets/edit.png';
import remove from '../../assets/delete.png';
import notask from '../../assets/notask.png';
import { useDispatch } from 'react-redux';
import { checkTodo, removeTodo } from '../../reducers/todoReducers';

const TaskList = ({ tasklist }) => {

    const dispatch = useDispatch();

    return (
        <div className="listContainer">
            {tasklist.length === 0 ?
                <div className='notasks'>
                  <img src={notask} alt=''></img>
                  <span>No tasks found ! Start by creating a new one.</span>
                </div> :
                tasklist.map((task, index) => (
                    <div className="taskBox" key={task.id}>
                        <div className="content">
                            <input type='checkbox' id={index} checked={task.checked} onChange={(e) => dispatch(checkTodo(e.target.id))}></input>
                            <div className="details">
                                <span>{task.text}</span>
                                {task.label === 'Today' ?
                                    <span className='label' style={{ color: 'green' }}>{task.label}</span> :
                                    <span className='label' style={{ color: 'firebrick' }}>{task.label}</span>}
                            </div>
                        </div>
                        <div className="action">
                            <img src={edit} alt=''></img>
                            <img src={remove} alt='' onClick={() => dispatch(removeTodo(task.id))}></img>
                        </div>
                    </div>))}
        </div>
    )
}

export default TaskList