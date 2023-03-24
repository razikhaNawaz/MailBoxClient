import { createSlice } from "@reduxjs/toolkit"

const initialState={
    inboxData:[],
    unread:0

}

const InboxReducer=createSlice({
    name:'Inbox',
    initialState:initialState,
    reducers:{
        changeInbox(state,actions){
            state.inboxData=actions.payload
        },
        updateUnread(state, actions){
            state.unread=actions.payload
        }
    }
})
export const InboxActions=InboxReducer.actions
export default InboxReducer.reducer