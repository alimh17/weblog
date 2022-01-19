import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import { Token } from "../../../../../utils/config.js";
import { URL } from "../../../../../utils/config.json";

import style from "./postOptions.module.css";

const PostOptions = ({ showPostOption, setShowPostOption, id }) => {
  const users = useSelector((state) => state.users);

  return (
    <div
      className={`${style.postOptionContainer} ${
        showPostOption[0] === id && showPostOption[1] === true
          ? "d-flex"
          : "d-none"
      }`}
    >
      <ul>
        <li
          onClick={() => {
            setShowPostOption([id, !showPostOption[1]]);
            users.map((item, index) => {
              if (item[2] === id) {
                axios.post(`${URL}/remove_freind`, {
                  data: item,
                  Token,
                });
              }
            });
          }}
        >
          حذف
        </li>
      </ul>
    </div>
  );
};

export default PostOptions;
