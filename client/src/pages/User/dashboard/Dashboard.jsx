import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddPost from "../../../components/AddPost/AddPost";
import User from "../User";
import SidebarComponent from "./components/Sidebar";

import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [active, setActive] = useState({ activeLink: 1 });
  const [resize, setResize] = useState(false);

  const handleClick = (id) => {
    setActive({ activeLink: id });
  };

  return (
    <Container dir="rtl" fluid>
      <Row>
        <Col
          md={resize ? "1" : "3"}
          sm="3"
          className={`${style.sidebar} d-none d-md-flex flex-column`}
        >
          <SidebarComponent
            click={handleClick}
            active={active}
            setResize={setResize}
            resize={resize}
          />
        </Col>
        <Col md={resize ? "11" : "9"} sm="9" className={`${style.main} md-12 `}>
          {active.activeLink === 1 ? (
            <AddPost />
          ) : active.activeLink === 2 ? (
            <User />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
