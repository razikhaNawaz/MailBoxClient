import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isAuthenticate:!!localStorage.getItem('email')
}

const AuthReducer=createSlice({
    name:'Authentication',
    initialState:initialState,
    reducers:{
        login(state){
            state.isAuthenticate=true
        },
        logout(state){
            state.isAuthenticate=false
            localStorage.clear()
        }
    }

})
export const AuthActions=AuthReducer.actions
export default AuthReducer.reducer