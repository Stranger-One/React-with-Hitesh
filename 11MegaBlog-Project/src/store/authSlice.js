import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action) => {
            console.log("payload", action.payload.userData)
            state.status = true
            state.userData = action.payload.userData
            console.log("user login", state.status, state.userData)
        },
        logout: (state, action) =>{
            state.status = false
            state.userData = null
            console.log("user logout", state.status, state.userData)
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer