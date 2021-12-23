import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Col, Row } from "react-bootstrap";

import style from "./Home.module.css";

import UserList from "./UserList/UserList";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/register", { replace: true });
    }
    document.title = "وبلاگ | صفحه اصلی";
  }, [token]);

  return (
    <Container fluid dir="rtl">
      <Row>
        <Col md="4">
          <div>
            <h5 className="text-center p-3">دوستان جدید</h5>
            <hr />
            <UserList />
          </div>
        </Col>
        <Col md="8">8</Col>
      </Row>
    </Container>
  );
};

export default Home;
