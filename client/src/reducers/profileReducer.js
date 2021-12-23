export const profileReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return action.payload;
    case "GET_PROFILE":
      return action.payload;
    default:
      return state;
  }
};
