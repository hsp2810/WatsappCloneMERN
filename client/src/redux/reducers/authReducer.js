import { createAction, createReducer } from "@reduxjs/toolkit";

const authSuccess = createAction("authSuccess");
const loginSuccess = createAction("loginSuccess");
const logoutSuccess = createAction("logoutSuccess");
const fetchFriendsSuccess = createAction("fetchFriendsSuccess");

export const authReducer = createReducer({}, (builder) => {
  builder.addCase(authSuccess, (state, action) => {
    state.isLogin = true;
    state.homeUser = action.payload;
  });
  builder.addCase(loginSuccess, (state, action) => {
    state.isLogin = true;
    state.homeUser = action.payload;
  });
  builder.addCase(logoutSuccess, (state) => {
    state.isLogin = false;
    state.homeUser = null;
    state.friends = null;
  });
  builder.addCase(fetchFriendsSuccess, (state, action) => {
    state.friends = action.payload;
  });
});
