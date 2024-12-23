import getFormattedTime from "@/utils/getFormattedTime";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        type: "incoming",
        author: "Dev 🤖",
        message: "Hello Human!",
    },
    {
        type: "incoming",
        author: "Dev 🤖",
        message: "This is a test for chat messaging. You can try sending a message to test the UI.",
    },
];

const messagesSlice = createSlice({
    name: "messages",
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            state.push({...action.payload, time: getFormattedTime()});
            // state.unshift(action.payload);
        },
        updateMessages: (state, action) => {
            return action.payload;
        },
        deleteMessage: (state, action) => {
            return state.filter((message) => message.id !== action.payload);
        },
    },
});

// Export the actions
export const { addMessage, deleteMessage, updateMessages } = messagesSlice.actions;

// Export the reducer
export default messagesSlice.reducer;
