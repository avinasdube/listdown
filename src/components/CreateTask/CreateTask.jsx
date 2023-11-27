import React, { useState } from 'react';
import './CreateTask.scss';

import filter from '../../assets/filters.png';
import create from '../../assets/create.png';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../reducers/todoReducers';

const CreateTask = () => {

    // DEFINING HOOKS TO MANAGE STATES
    const [dropdown, setDropdown] = useState(false);
    const [selectedLabel, setLabel] = useState('Today')
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    // FUNCTION TO HANDLE DROPDOWN TOGGLE
    const handleDropdown = () => {
        dropdown === false ? setDropdown(true) : setDropdown(false);
    }

    // FUNCTION TO HANDLE SUBMISSION
    const handleSubmit = (e)=> {
        e.preventDefault();

        // IF INPUT FIELD IS BLANK THEN RETURN
        if (!input.trim()) {
            // setShowPopup(true)
            // setTimeout(() => {
            //     setShowPopup(false)
            // }, 2000)
            return
        }

        // DEFINING A NEW TASK OBJECT
        const newTask = {
            id: Date.now(),
            text: input,
            checked: false,
            label: selectedLabel,
            time: new Date().toLocaleString()
        }

        dispatch(addTodo(newTask)) // DISPATCHING THE NEW TASK TO REDUX STORE

        setInput('') // SETTING INPUT TO EMPTY AFTER SUCCESSFUL TASK ADDITION
    }

    const currentMode = useSelector(state => state.mode.currentMode);

    return (
        <div className={`inputContainer ${currentMode === 'dark' ? 'active' : ''}`}>
            <div className="inputSubContainer">
                <form onSubmit={handleSubmit} className="formContainer">
                    <input type='text' placeholder='Create a new task ...' value={input} onChange={(e) => { setInput(e.target.value)}}></input>
                    <div className="actions">
                        
                        {/* lABEL TOGGLER */}

                        <div className="labelSelector">
                            <div className="activeLabel" onClick={handleDropdown}>
                                <span>{selectedLabel}</span>
                                <img src={filter} alt=''></img>
                            </div>
                            <div className={`labelList ${dropdown === true ? 'active' : ''}`}>
                                <span onClick={()=>setLabel('Today')}>Today</span>
                                <span onClick={()=>setLabel('Tommorow')}>Tommorow</span>
                                <span onClick={()=>setLabel('Upcoming')}>Upcoming</span>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}

                        <button type='submit'><img src={create} alt=''></img></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask