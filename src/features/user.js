// User reducers
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // name of slice/state
    name: "user", 
    // initial values
    initialState: { 
        value: {
            name: "Allen",
            age: 27,
            email: "a@a.com",
        } 
    },
    reducers: {
        login: ( state, action) => {
            // changing previous state to our updated payload
            state.value = action.payload;
        }
    }
})

export default userSlice.reducer;