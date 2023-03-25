import { createSlice } from "@reduxjs/toolkit"

const initialState={
    inboxData:[],
    unread:0,
    getReq:true
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
        },
        updateGet(state){
            state.getReq=!state.getReq
        }
    }
})
export const InboxActions=InboxReducer.actions
export default InboxReducer.reducer