import axios from "axios";
import { URL } from "../utils/config.json";

export const friendsPostAction = (token) => async (dispatch, getState) => {
  try {
    axios.post(`${URL}/all_freinds/posts`, { data: token }).then((res) => {
      const filterData = res.data.data.filter((d) => d.length > 0);
      dispatch({ type: "GET_FRIENDS_POSTS", payload: filterData });
    });
  } catch (err) {
    console.log(err);
  }
};
