// User reducers
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // name of slice/state
    name: "user", 
    // initial values
    initialState: { 
        value: {
            name: "",
            age: 0,
            email: "",
        } 
    },
    reducers: {
        login: ( state, action) => {
            // changing previous state to our updated payload
            state.value = action.payload;
        }
    }
})

export const {login} = userSlice.actions;

export default userSlice.reducer;