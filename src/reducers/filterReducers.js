import { createSlice } from '@reduxjs/toolkit';

// SETTING INITIALSTATE FOR 'filterSlice'
const initialState = {
    activeFilter: '',
    searchWord: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // SETTING ACTIVE FILTER
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        
        // SETTING SEARCH WORD
        setSearchWord: (state, action) => {
            state.searchWord = action.payload;
        }
    }
})

export const { setActiveFilter, setSearchWord } = filterSlice.actions;
export default filterSlice.reducer;