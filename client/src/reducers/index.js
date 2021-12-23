import { combineReducers } from "redux";
import { darkModeReducer } from "./darkMode";
import { profileReducer } from "./profileReducer";
import { userPostsReducer } from "./userPosts";
import { getUsersReducer } from "./Users";

export const rootReducers = combineReducers({
  darkMode: darkModeReducer,
  userPosts: userPostsReducer,
  profile: profileReducer,
  users: getUsersReducer,
});
