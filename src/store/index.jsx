import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/messagesSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        messages: messagesReducer,
    },
});
