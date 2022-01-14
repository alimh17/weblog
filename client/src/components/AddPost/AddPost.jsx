import React from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import style from "./addPost.module.css";
import Time from "./components/Time";
import Form from "./components/Form";
import Idea from "./components/Idea";
import Maker from "./components/Maker";

const AddPost = () => {
  useEffect(() => {
    document.title = "وبلاگ | افزودن پست جدید";
  }, []);

  return (
    <Container dir="rtl" fluid>
      <Row>
        <Col md="12">
          <Container dir="rlt">
            <Row>
              <Col md="4" sm="4">
                <Time />
              </Col>
              <Col md="4" sm="4">
                <Idea />
              </Col>
              <Col md="4" sm="4">
                <Maker />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md="6" sm="12" className="my-5 ">
          <section className={style.section}>
            <Form />
          </section>
        </Col>
        <Col md="6" sm="12" className="my-5 ">
          <section className={style.section}>
            <Form />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
