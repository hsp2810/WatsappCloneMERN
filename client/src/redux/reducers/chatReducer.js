import { createAction, createReducer } from "@reduxjs/toolkit";

const selectChat = createAction("selectChat");

export const chatReducer = createReducer({}, (builder) => {
  builder.addCase(selectChat, (state, action) => {
    state.selectedChat = action.payload.selectedChat;
  });
});
