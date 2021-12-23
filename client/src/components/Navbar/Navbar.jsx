import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineBars, AiOutlineSetting } from "react-icons/ai";

import Setting from "./setting/Setting";

import style from "./Navbar.module.css";
import DarkModeIcons from "./darkModeIcons/DarkModeIcons";
import UserInfo from "./userInfo/UserInfo";
import Logo from "./Logo/Logo";
import AddPost from "./addPost/AddPost";

const Navbar = () => {
  return (
    <Container dir="rlt" fluid>
      <Row className={style.row}>
        <Col>
          <div className={`${style.userInfo} d-md-flex d-none `}>
            <Setting />
            <DarkModeIcons />
            <UserInfo />
          </div>
          <div className={`${style.barWrapper} d-flex d-md-none`}>
            <AiOutlineBars />
            <div className={`${style.barsOption}`}>
              <ul className=" h-100 d-flex flex-column justify-content-around align-items-center list-unstyled">
                <li>
                  تنظیمات
                  <Setting />
                </li>
                <li>
                  <DarkModeIcons />
                </li>
                <li>
                  <UserInfo className="h-100 bg-danger" />
                </li>
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
