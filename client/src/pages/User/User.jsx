import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkPlusFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";

import {
  getUserPostAction,
  userDeletePostAction,
} from "../../action/getUserPostsAction";
import { URL } from "../../utils/config.json";

import style from "./User.module.css";
import AllPosts from "../../components/AllPosts/AllPosts";

const User = () => {
  const [profile, setProfile] = useState(null);
  const [optionDisplay, setOptionDisplay] = useState([undefined, false]);
  const { addToast } = useToasts();

  const data = useSelector((state) => state.userPosts);
  const dark = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPostAction());
  }, []);

  return (
    <Container dir="rtl" fluid className={style.container}>
      <Row>
        {data.length > 0 ? (
          data.map((item, index) => (
            <Col key={item._id} md="6" xl="4">
              <Card className="mx-2 my-2">
                <Card.Img
                  variant="top"
                  alt="post image"
                  src={`${URL}/${item.file.slice(6, item.lenght)}`}
                  className={style.postImg}
                />
                <span
                  className={style.optionBTN}
                  onClick={(e) => {
                    setOptionDisplay([index, !optionDisplay[1]]);
                  }}
                >
                  <BsThreeDotsVertical />
                </span>
                <span
                  className={`${style.option} ${
                    optionDisplay[0] === index && optionDisplay[1] === true
                      ? "d-flex"
                      : "d-none"
                  } `}
                >
                  <ul>
                    <li
                      onClick={(e) => {
                        dispatch(userDeletePostAction(item._id));
                        setOptionDisplay([, !optionDisplay]);
                        addToast("پست با موفقیت حذف گردید", {
                          appearance: "success",
                          autoDismiss: true,
                        });
                      }}
                    >
                      حذف
                      <span className={style.deleteIcon}>
                        <FaTrash />
                      </span>
                    </li>
                    <hr />
                    <li>
                      علاقه مندی ها
                      <span className={style.deleteIcon}>
                        <BsFillBookmarkPlusFill />
                      </span>
                    </li>
                  </ul>
                </span>
                <Card.Body>
                  <Card.Title className={dark && "text-dark"}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className={dark && "text-dark"}>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className={style.notPost}>
            <video
              src={process.env.PUBLIC_URL + "/images/Like.mp4"}
              autoPlay
              loop
            />
            <h4 className={dark && "text-light"}>هیچ پستی وجود ندارد</h4>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default User;
