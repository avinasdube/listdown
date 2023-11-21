import { createSlice } from '@reduxjs/toolkit';

// FETCHING TASKS FROM localStorage TO INITIALIZE 'todos'
const getInitialTodos = () => {
    return JSON.parse(localStorage.getItem("tasklist")) || [];
}

// SETTING INITIALSTATE FOR 'todosSlice'
const initialState = {
    todos: getInitialTodos(),
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            // FETCHING 'tasklist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            let storageTask;

            if (localStorage.getItem("tasklist") === null) {
                storageTask = [];
            } else {
                storageTask = JSON.parse(localStorage.getItem("tasklist"))
            }

            // PUSHING THE NEW TASK TO 'storageTask' ARRAY
            storageTask.push(action.payload)

            // UPDATING THE 'tasklist' ARRAY OF localStorage WITH NEW TASK
            localStorage.setItem("tasklist", JSON.stringify(storageTask))

            // UPDATING THE LOCAL STATE WITH NEW TASK
            state.todos.push(action.payload)
        },
        checkTodo: (state, action) => {
            const index = action.payload;

            // FETCHING 'tasklist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            const storageTask = JSON.parse(localStorage.getItem("tasklist"))

            // UNCHECKING THE TARGETTED TASK 
            storageTask[index].checked = !storageTask[index].checked;
            
            // UPDATING THE localStorage
            localStorage.setItem("tasklist", JSON.stringify(storageTask));

            // UPDATING LOCAL STATE
            state.todos = storageTask;
        },
        removeTodo: (state, action) => {
            const id = action.payload;

            // FETCHING 'tasklist' FROM LOCALSTORAGE AND STORING IT IN 'storageTask'
            const storageTasks = JSON.parse(localStorage.getItem("tasklist"))

            // FILTERING 'storageTasks' HAVING NO TASK WITH 'task.id === id'
            const filteredTasks = storageTasks.filter(task => task.id !== id)

            // UPDATING THE localstorage
            localStorage.setItem("tasklist", JSON.stringify(filteredTasks));

            // UPDATING THE LOCAL STATE
            state.todos = filteredTasks;
        }
    }
})

export const { addTodo, checkTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;