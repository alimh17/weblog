import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginMobile from "../../Mobile/Login_mobile";
import RegisterMobile from "../../Mobile/Register_mobile";

import Login from "./Login";
import Register from "./Register";

import style from "./Register.module.css";

const Index = () => {
  const [actived, setActived] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (actived) {
      document.title = "وبلاگ | ورود";
    } else {
      document.title = "وبلاگ | ثبت نام";
    }
  }, [actived, token]);

  return (
    <Container fluid dir="rtl">
      <Row>
        <Col md="6" className={style.right}>
          <div className={`${style.items}`}>
            <span
              className={`${style.login}  ${
                actived ? style.active : ""
              }  d-md-flex d-none`}
              onClick={() => setActived(!actived)}
            >
              ورود
            </span>
            <span
              className={`${style.register} ${
                !actived ? style.active : ""
              } d-md-flex d-none`}
              onClick={() => setActived(!actived)}
            >
              ثبت نام
            </span>
          </div>
          <div className="d-md-none d-flex justify-content-center align-items-center h-100 ">
            {actived ? (
              <LoginMobile
                actived={actived}
                setActived={setActived}
                showPass={showPass}
                setShowPass={setShowPass}
              />
            ) : (
              <RegisterMobile
                setActived={setActived}
                showPass={showPass}
                setShowPass={setShowPass}
                showPassConf={showPassConf}
                setShowPassConf={setShowPassConf}
              />
            )}
          </div>
        </Col>
        <Col md="6" className={`${style.left} d-md-flex d-none`}>
          {!actived ? (
            <Register
              actived={setActived}
              showPass={showPass}
              setShowPass={setShowPass}
              showPassConf={showPassConf}
              setShowPassConf={setShowPassConf}
            />
          ) : (
            <Login showPass={showPass} setShowPass={setShowPass} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
