export const friendsPostReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FRIENDS_POSTS":
      return action.payload;
    default:
      return state;
  }
};
