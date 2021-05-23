import { ACTION } from "./const";

export const fetchCurrentItem = () => ({
  type: ACTION.FETCH_CURRENT_ITEM,
});

export const setCurrentItem = (payload: string) => ({
  type: ACTION.SET_CURRENT_ITEM,
  payload,
});

export const updateCurrentItem = (payload: string) => ({
  type: ACTION.UPDATE_CURRENT_ITEM,
  payload,
});

export const setErrorMessage = (payload: string) => ({
  type: ACTION.SET_ERROR_MESSAGE,
  payload,
});

export const resetCurrentItem = () => ({
  type: ACTION.RESET_CURRENT_ITEM,
});
