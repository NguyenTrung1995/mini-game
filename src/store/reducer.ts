import { Map } from "immutable";

import { ACTION } from "./const";

const initialState = Map({
  currentItem: null,
  error: null,
});

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_CURRENT_ITEM:
      return state.set("currentItem", action.payload).set("error", null);
    case ACTION.SET_ERROR_MESSAGE:
      return state.set("error", action.payload);
    default:
      return state;
  }
};

export default reducerApp;
