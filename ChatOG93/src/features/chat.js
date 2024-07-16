import { createSlice } from '@reduxjs/toolkit'


const initialState = {
        name:"user",
        messageText:"Hi, I am AI, How Can I Help You ?",
    }

export const chatAi = createSlice({
    name:'chatAi',
    initialState,
    reducers:{
        addMessage:(state,action) => {
            state.messageText = action.payload
        },
    }
})


export const { addMessage } = chatAi.actions;
export default chatAi.reducer;