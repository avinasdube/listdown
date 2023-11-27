import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import todoReducers from './reducers/todoReducers';
import thunk from 'redux-thunk';
import filterReducers from './reducers/filterReducers';
import modeReducer from './reducers/modeReducer';

// CONFIGURING STORE
const store = configureStore({
    reducer: {
        todos: todoReducers,
        labels: filterReducers,
        mode: modeReducer,
    }
}, applyMiddleware(thunk))

export default store;