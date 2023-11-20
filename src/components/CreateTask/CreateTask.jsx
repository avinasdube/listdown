import React, { useState } from 'react';
import './CreateTask.scss';

import filter from '../../assets/filters.png';
import create from '../../assets/create.png';

const CreateTask = () => {

    const [dropdown, setDropdown] = useState(false);
    const [selectedLabel, setLabel] = useState('Today')

    const handleDropdown = () => {
        dropdown === false ? setDropdown(true) : setDropdown(false);
    }

    return (
        <div className="inputContainer">
            <div className="inputSubContainer">
                <form className="formContainer">
                    <input type='text' placeholder='Create a new task ...'></input>
                    <div className="actions">
                        
                        {/* label toggler */}

                        <div className="labelSelector">
                            <div className="activeLabel" onClick={handleDropdown}>
                                <span>{selectedLabel}</span>
                                <img src={filter} alt=''></img>
                            </div>
                            <div className={`labelList ${dropdown === true ? 'active' : ''}`}>
                                <span onClick={()=>setLabel('Today')}>Today</span>
                                <span onClick={()=>setLabel('Upcoming')}>Upcoming</span>
                            </div>
                        </div>

                        {/* submit button */}

                        <button><img src={create} alt=''></img></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask