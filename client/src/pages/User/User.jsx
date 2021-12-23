import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillBookmarkPlusFill,
  BsPlus,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";

import {
  getUserPostAction,
  userDeletePostAction,
} from "../../action/getUserPostsAction";
import Navbar from "../../components/Navbar/Navbar";
import { URL } from "../../utils/config.json";

import style from "./User.module.css";
import { Link } from "react-router-dom";

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
    <Container dir="rtl" fluid>
      <Row>
        <Col md="4" className={style.right}>
          <article className={style.article}>
            <img
              alt="profile"
              src="https://i.pinimg.com/564x/0e/64/58/0e64589e12b9c7cca0e92ff099fcbd4a.jpg"
            />
            <input type="text" value="i love music and football" />
            <ul>
              <li>music</li>
              <li>football</li>
              <li>fashion</li>
              <li>song</li>
            </ul>
          </article>
        </Col>
        <Col md="8" className={style.left}>
          <Container dir="rtl">
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
                          optionDisplay[0] === index &&
                          optionDisplay[1] === true
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
                  <h2 className={dark && "text-light"}>هیچ پستی وجود ندارد</h2>
                  <Link
                    to="/add_post"
                    className={`${
                      dark && "text-light text-decoration-underline"
                    } text-decoration-none fs-5`}
                  >
                    پست جدید
                    <span>
                      <BsPlus />
                    </span>
                  </Link>
                </div>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
