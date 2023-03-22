import { createSlice } from "@reduxjs/toolkit"

const initialState={
    inboxData:[],

}

const InboxReducer=createSlice({
    name:'Inbox',
    initialState:initialState,
    reducers:{
        changeInbox(state,actions){
            state.inboxData=actions.payload
        }
    }
})
export const InboxActions=InboxReducer.actions
export default InboxReducer.reducer