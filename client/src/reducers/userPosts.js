export const userPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_POSTS":
      return action.payload;
    case "DELETE_USER_POST":
      return action.payload;
    default:
      return state;
  }
};
