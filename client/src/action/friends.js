import axios from "axios";
import { URL } from "../utils/config.json";

export const getFriendsAction = (token) => (dispatch, getState) => {
  axios
    .post(`${URL}/all_freinds`, {
      data: token,
    })
    .then((res) => {
      dispatch({ type: "GET_FRIENDS", payload: res.data.data });
    });
};
