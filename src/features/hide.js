import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const hideSlice = createSlice({
    name: "hide",
    initialState: {value: initialState},
    reducers: {
        hide: (state, action) => {
            state.value = true
        },
        show: (state, action) => {
            state.value = false
        } 
    }
})

export const {hide, show} = hideSlice.actions;

export default hideSlice.reducer;