// User reducers
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    age: 0,
    email: "",
}

export const userSlice = createSlice({
    // name of slice/state
    name: "user",
    // initial values
    initialState: {
        value: initialStateValue
    },
    reducers: {
        login: (state, action) => {
            // changing previous state to our updated payload
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;