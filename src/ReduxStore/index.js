import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import InboxReducer from "./InboxReducer";
import SentBoxReducer from "./SentBoxReducer";




const store=configureStore({
    reducer:{
        authReducer:AuthReducer,
        inboxReducer:InboxReducer,
        sentBoxReducer:SentBoxReducer
    }
})
export default store;