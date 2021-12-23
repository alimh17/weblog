import axios from "axios";
import { URL } from "../utils/config.json";

export const setProfileAction =
  (file, addToast) => async (dispatch, getState) => {
    if (file) {
      const formdata = new FormData();
      formdata.append("picture", file);
      formdata.append("token", localStorage.getItem("token"));
      axios
        .put(`${URL}/post/update_profile`, formdata)
        .then((res) => {
          if (res.status === 200) {
            addToast("تغییرات با موفقیت انجام شد", {
              appearance: "success",
              autoDismiss: true,
            });
            dispatch({ type: "SET_PROFILE", payload: res.data.data });
          }
        })
        .catch((err) => console.log(err));
    }
  };

export const updateProfileAction =
  (e, addToast) => async (dispatch, useState) => {
    try {
      axios
        .post(`${URL}/post/update_profile`, {
          data: {
            username: e.target[0].value,
            bio: e.target[1].value,
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            res.data.data.map((item) => {
              dispatch({ type: "SET_PROFILE", payload: item });
            });

            addToast("تغییرات با موفقیت انجام شد", {
              appearance: "success",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            addToast("مشکلی از سمت سرور پیش امده است", {
              appearance: "error",
              autoDismiss: true,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

export const getProfileAction = (token) => (dispatch, getState) => {
  axios
    .post(`${URL}/post/get_profile`, {
      data: token,
    })
    .then((res) => {
      res.data.map((item) => {
        dispatch({ type: "GET_PROFILE", payload: item });
      });
    });
};
