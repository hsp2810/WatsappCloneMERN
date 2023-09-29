import { createAction, createReducer } from "@reduxjs/toolkit";

const setSocketConnected = createAction("setSocketConnected");

export const socketReducer = createReducer({}, (builder) => {
  builder.addCase(setSocketConnected, (state) => {
    state.isSocketConnected = true;
  });
});
