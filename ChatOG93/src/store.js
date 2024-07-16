import { configureStore } from "@reduxjs/toolkit";
import { chatAi } from "./features/chat.js";


export const store = configureStore({
    reducer:{
        chatAi,
    }
})

