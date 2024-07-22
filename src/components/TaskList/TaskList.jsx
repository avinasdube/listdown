import React, { useState } from 'react';
import './TaskList.scss';

import { useDispatch, useSelector } from 'react-redux';
import { checkTodo, editTodo, removeTodo } from '../../reducers/todoReducers';

import NoTask from '../NoTask/NoTask';

import edit from '../../assets/edit.png';
import remove from '../../assets/delete.png';
import EditModal from '../EditModal/EditModal';

const TaskList = ({ tasklist }) => {

    const dispatch = useDispatch();

    const [editModal, setEditModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState({});

    const filter = useSelector(state => state.labels.activeFilter); // GETTING ACTIVE FILTER KEYWORD
    const searchWord = useSelector(state => state.labels.searchWord); // GETTING SEARCHED KEYWORD

    // FILTERING THE TASKLIST IF ANY FILTERS ARE SELECTED ELSE RETURN ALL TASKS
    const filteredTasks = filter !== '' ? tasklist.filter((task) => task.label === filter) : tasklist

    // SEARCHING TASKS FROM THE FILTERED TASKS
    const filteredAndSearchedTasks = filteredTasks.filter((task) => {
        return searchWord.toLowerCase() === "" ? true : task.text.toLowerCase().includes(searchWord.toLowerCase());
    });

    const currentMode = useSelector(state => state.mode.currentMode);

    const handleEditModal = () => {
        editModal === false ? setEditModal(true) : setEditModal(false);
    }

    const handleTargetTask = (e) => {
        const targetTask = filteredAndSearchedTasks.find((task) => task.id === parseInt(e)) // FINDING TARGETTED TASK TO EDIT
        setTaskToEdit(targetTask)
    }

    return (
        <div className={`listContainer ${currentMode === 'dark' ? 'active' : ''}`}>
            {filteredAndSearchedTasks.length === 0 ?
                <NoTask filter={filter} /> :
                filteredAndSearchedTasks.map((task) => (
                    <div className="taskBox" key={task.id}>
                        <div className="content">
                            <input type='checkbox' id={task.id} checked={task.checked} onChange={(e) => dispatch(checkTodo(e.target.id))}></input>
                            <div className="details">
                                <span>{task.text}</span>
                                {task.label === 'Today' ?
                                    <span className='label' style={{ color: 'green', backgroundColor: 'palegreen' }}>{task.label}</span> :
                                    task.label === 'Tommorow' ?
                                        <span className='label' style={{ color: '#054aac', backgroundColor: 'skyblue' }}>{task.label}</span> :
                                        <span className='label' style={{ color: 'firebrick', backgroundColor: 'lightpink' }}>{task.label}</span>}
                            </div>
                        </div>
                        <div className="action">
                            <img src={edit} alt='' id={task.id} onClick={(e) => { handleEditModal(true); handleTargetTask(e.target.id) }}></img>
                            <img src={remove} alt='' onClick={() => dispatch(removeTodo(task.id))}></img>
                        </div>
                    </div>))}
            {editModal && <EditModal taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} handleEditModal={handleEditModal} />}
        </div>
    )
}

export default TaskList