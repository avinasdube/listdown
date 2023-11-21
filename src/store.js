import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import todoReducers from './reducers/todoReducers';
import thunk from 'redux-thunk';

// CONFIGURING STORE
const store = configureStore({
    reducer: {
        todos: todoReducers,
    }
}, applyMiddleware(thunk))

export default store;