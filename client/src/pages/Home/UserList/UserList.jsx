import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { URL } from "../../../utils/config.json";
import { Token } from "../../../utils/config";
import { AiFillPlusCircle } from "react-icons/ai";

import style from "../Home.module.css";
import { addFreindAction } from "../../../action/addFriendAction";
import axios from "axios";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      {users && (
        <ul>
          {users.map((item) => (
            <>
              <li className="d-flex justify-content-between p-2">
                <span className="d-flex">
                  <img
                    alt="avatar"
                    className={style.avatar}
                    style={{
                      display: item[1].length <= 0 ? "none" : "inline-block",
                    }}
                    src={
                      item[1].length > 0
                        ? URL + item[1].slice(6, item[1].length)
                        : ""
                    }
                  />
                  <span
                    style={{
                      display: item[1].length > 0 ? "none" : "flex",
                    }}
                    className={`${style.badge}`}
                  >
                    {item[0][0]}
                  </span>
                  <p className="mx-2">{item[0]}</p>
                </span>
                <span>
                  <Button
                    className=""
                    onClick={() => {
                      axios.post(`${URL}/add_freind`, { data: item, Token });
                    }}
                  >
                    افزودن
                    <AiFillPlusCircle className="mx-2" />
                  </Button>
                </span>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
