const init = {
  picture: null,
  bio: "",
  username: "",
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "PICTURE":
      return action.payload;
    case "BIO":
      return action.payload;
    case "USER_NAME":
      return action.payload;
    default:
      return state;
  }
};
