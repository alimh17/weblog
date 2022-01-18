import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineBars, AiOutlineSetting } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { URL } from "../../utils/config.json";

import Setting from "./setting/Setting";

import style from "./Navbar.module.css";
import DarkModeIcons from "./darkModeIcons/DarkModeIcons";
import UserInfo from "./userInfo/UserInfo";
import Logo from "./Logo/Logo";
import AddPost from "./addPost/AddPost";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showOption, setShowOption] = useState(false);
  const light = useSelector((state) => state.darkMode);
  const profile = useSelector((state) => state.profile);

  return (
    <Container dir="rlt" fluid className={style.navContianer}>
      <Row className={style.row}>
        <Col>
          <div className={`${style.userInfo} d-md-flex d-none `}>
            <Setting />
            <DarkModeIcons />
            <UserInfo />
          </div>
          <div className={`${style.barWrapper} d-flex d-md-none`}>
            <AiOutlineBars onClick={() => setShowOption(!showOption)} />
            <div
              className={`${style.barsOption} ${
                showOption ? "d-flex" : "d-none"
              }`}
            >
              <ul className=" h-100 d-flex flex-column justify-content-around align-items-center list-unstyled">
                <li className="d-flex justify-content-between   w-100">
                  <p>تنظیمات</p>
                  <Setting className="mr-3" />
                </li>
                <li className="d-flex justify-content-between  w-100">
                  <p>حالت شب</p>
                  <DarkModeIcons />
                </li>
                <li className="d-flex justify-content-between   w-100 ">
                  <Link
                    to="/user"
                    className="text-decoration-none d-flex justify-content-between w-100"
                  >
                    اکانت
                    <img
                      alt="avatar"
                      className={style.avatar}
                      src={`${
                        profile.picture
                          ? URL +
                            profile.picture.slice(6, profile.picture.length)
                          : ""
                      }`}
                    />
                  </Link>
                </li>
                <span
                  className={style.timesIcon}
                  onClick={() => setShowOption(false)}
                >
                  <FaTimes />
                </span>
              </ul>
            </div>
          </div>
        </Col>
        <Col className={style.logoContainer}>
          <Logo />
        </Col>
        <Col className={style.addPost}>
          <AddPost />
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
