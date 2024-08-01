import React, { useState } from 'react';
import './EditModal.scss';

import cancelImg from '../../assets/cancel.png';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../reducers/todoReducers';

const EditModal = ({ taskToEdit, setTaskToEdit, handleEditModal }) => {

    const [title, setTitle] = useState(taskToEdit ? taskToEdit.text : '');
    const [label, setLabel] = useState(taskToEdit ? taskToEdit.label : '');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        const editedTask = {
            id: taskToEdit.id,
            text: title,
            checked: taskToEdit.checked,
            label: label,
            time: new Date().toLocaleString()
        }

        dispatch(editTodo(editedTask));
        handleEditModal(true);
    }

    return (
        <div className="modalContainer">
            <div className="modalBox">
                <div className="modalHead">
                    <div className="modalHeading">Edit your task</div>
                    <div className="cancelIcon">
                        <img className="cancelIconImg" src={cancelImg} alt='' onClick={() => handleEditModal(true)}></img>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="modalEditForm">
                    <div className="inputBox">
                        <label>Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} value={title}></input>
                    </div>
                    <div className="inputBox">
                        <label>Label</label>
                        <div className="labelList">
                            <span className={`labelTile ${label === 'Today' ? 'active' : ''}`} onClick={() => setLabel('Today')}>Today</span>
                            <span className={`labelTile ${label === 'Tommorow' ? 'active' : ''}`} onClick={() => setLabel('Tommorow')}>Tommorow</span>
                            <span className={`labelTile ${label === 'Upcoming' ? 'active' : ''}`} onClick={() => setLabel('Upcoming')}>Upcoming</span>
                        </div>
                    </div>
                    <div className="inputBox">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModal;