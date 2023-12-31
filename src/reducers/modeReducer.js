import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentMode: 'light'
};

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setCurrentMode: (state, action) => {
            state.currentMode = action.payload
        }
    }
})

export const { setCurrentMode } = modeSlice.actions;
export default modeSlice.reducer;
