import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import InboxReducer from "./InboxReducer";




const store=configureStore({
    reducer:{
        authReducer:AuthReducer,
        inboxReducer:InboxReducer
    }
})
export default store;