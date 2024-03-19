import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { StoreType } from "../../store/root";

export const useThunkDispatch = () =>
  useDispatch<ThunkDispatch<StoreType, void, AnyAction>>();
