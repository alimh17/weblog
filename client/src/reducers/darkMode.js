export const darkModeReducer = (state = false, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return action.payload;
    default:
      return state;
  }
};
