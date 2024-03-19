import { createSlice } from "@reduxjs/toolkit";
import { loginUserOperation, logoutUserOperation } from "./operations";
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
  },
});

export const { login, logout } = userStore.actions;
export default userStore.reducer;
