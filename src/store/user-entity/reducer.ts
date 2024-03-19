import { createSlice } from "@reduxjs/toolkit";
import { getUserInfoOperation, loginUserOperation, logoutUserOperation } from "./operations";
import { IUserState } from "./interface";

const initialValue: IUserState = {
  user: null,
};

export const userStore = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    login: loginUserOperation,
    logout: logoutUserOperation,
    getUserInfo: getUserInfoOperation
  },
});

export const { login, logout, getUserInfo } = userStore.actions;
export default userStore.reducer;
