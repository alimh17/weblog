import axios from "axios";
import { URL } from "../utils/config.json";

export const getUserPostAction = () => {
  return async (dispatch, getState) => {
    axios
      .post(`${URL}/post/get_user_posts`, {
        data: localStorage.getItem("token"),
      })
      .then((res) => {
        dispatch({ type: "GET_USER_POSTS", payload: res.data.data });
      })
      .catch((err) => console.log(err));
  };
};

export const userDeletePostAction = (id) => async (dispatch, getState) => {
  const posts = [...getState().userPosts];
  const filterPost = posts.filter((item) => item._id !== id);
  await dispatch({ type: "DELETE_USER_POST", payload: filterPost });

  axios({
    url: `${URL}/post/delete_user_posts`,
    method: "put",
    data: { posts: filterPost, token: localStorage.getItem("token") },
  });
};
