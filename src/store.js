import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import todoReducers from './reducers/todoReducers';
import thunk from 'redux-thunk';
import filterReducers from './reducers/filterReducers';

// CONFIGURING STORE
const store = configureStore({
    reducer: {
        todos: todoReducers,
        labels: filterReducers,
    }
}, applyMiddleware(thunk))

export default store;