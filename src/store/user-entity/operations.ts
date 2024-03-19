import { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./interface";
import { User } from "core/types/user.type";

export const loginUserOperation = (
  state: IUserState,
  { payload }: PayloadAction<User>
) => {
  state.user = payload;
};

export const logoutUserOperation = (state: IUserState) => {
  state.user = null;
};

export const getUserInfoOperation = (
  state: IUserState,
  { payload }: PayloadAction<User>
) => {
  state.user = payload;
};
