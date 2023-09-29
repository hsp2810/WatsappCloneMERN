import { createAction, createReducer } from "@reduxjs/toolkit";

const selectChat = createAction("selectChat");
const setSelectedChatMessages = createAction("setSelectedChatMessages");
const updateChatMessages = createAction("updateChatMessages");

export const chatReducer = createReducer({}, (builder) => {
  builder.addCase(selectChat, (state, action) => {
    state.selectedChat = action.payload.selectedChat;
  });
  builder.addCase(setSelectedChatMessages, (state, action) => {
    state.chatMessages = action.payload.messages;
  });
  builder.addCase(updateChatMessages, (state, action) => {
    state.chatMessages = [
      ...state.chatMessages,
      action.payload.receivedMessage,
    ];
  });
});
