export const selectCurrentItem = (state: any) => {
  return state.get("currentItem");
};

export const selectErrorMessage = (state: any) => {
  return state.get("error");
};
