import axios from "axios";

import { URL } from "../utils/config.json";
import { Token } from "../utils/config";

export const getUserAction = () => (dispatch, getState) => {
  axios
    .post(`${URL}/get_all_user`, {
      data: Token,
    })
    .then((res) => {
      dispatch({ type: "GET_USERS", payload: res.data.data });
    })
    .catch((err) => console.log(err));
};
