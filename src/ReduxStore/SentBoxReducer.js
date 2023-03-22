import { createSlice } from "@reduxjs/toolkit";


const initialState={
    dataSentbox:[]
}
const SentBox=createSlice({
    name:'sentBox',
    initialState:initialState,
    reducers:{
        updateSentbox(state,actions){
            state.dataSentbox=actions.payload
        }

    }
})
export const sentBoxActions=SentBox.actions
export default SentBox.reducer