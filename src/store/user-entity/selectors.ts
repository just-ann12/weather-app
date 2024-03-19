import { StoreType } from "../root";

export const selectorGetUser = (store: StoreType) => store.userStore.user;