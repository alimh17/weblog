import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { MdBookmarkAdded } from "react-icons/md";
import { Button } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";

import { URL } from "../../../utils/config.json";
import { Token } from "../../../utils/config";
import style from "../Home.module.css";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const friends = useSelector((state) => state.friends);
  const [userHasFriend, setUserHasFriend] = useState([]);

  useEffect(() => {
    setUserHasFriend(new Array(users.length).fill(false));
    const friend = [];
    friends.map((f) => {
      const findUserIndex = users.findIndex((u) => u[2] === f._id);
      friend.push(findUserIndex);
      const fakeUsers = [...userHasFriend];
      friend.map((i) => {
        fakeUsers[i] = true;
      });
      setUserHasFriend(fakeUsers);
    });
  }, [friends]);

  const handleUserHasFriend = (e, index, item) => {
    const fakeUsers = [...userHasFriend];
    fakeUsers[index] = !fakeUsers[index];
    setUserHasFriend(fakeUsers);
  };

  return (
    <div>
      {users && (
        <ul>
          {users.map((item, index) => (
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
                    className={`btn ${
                      userHasFriend[index] ? "btn-secondary" : "btn-primary"
                    }`}
                    onClick={(e) => {
                      handleUserHasFriend(e, index, item);
                      userHasFriend[index]
                        ? axios.post(`${URL}/remove_freind`, {
                            data: item,
                            Token,
                          })
                        : axios.post(`${URL}/add_freind`, {
                            data: item,
                            Token,
                          });
                    }}
                  >
                    {userHasFriend[index] ? (
                      <p className={style.addFriendBtn}>
                        اضافه شد
                        <MdBookmarkAdded className="mx-2" />
                      </p>
                    ) : (
                      <p className={style.addFriendBtn}>
                        افزودن
                        <AiFillPlusCircle className="mx-2" />
                      </p>
                    )}
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
