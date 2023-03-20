import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";




const store=configureStore({
    reducer:{
        authReducer:AuthReducer
    }
})
export default store;