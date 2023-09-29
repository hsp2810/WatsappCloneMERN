import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "../reducers/chatReducer";
import { authReducer } from "../reducers/authReducer";
import { socketReducer } from "../reducers/socketReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    socket: socketReducer,
  },
});
