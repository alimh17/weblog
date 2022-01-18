import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Container, Col, Row } from "react-bootstrap";

import style from "./Home.module.css";

import UserList from "./UserList/UserList";
import { getFriendsAction } from "../../action/friends";
import { useDispatch, useSelector } from "react-redux";
import { friendsPostAction } from "../../action/friendsPosts";
import PostAllFreinds from "./posts/PostAllFreinds";

const Home = React.memo((props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/register", { replace: true });
    }
    dispatch(getFriendsAction(token));
    document.title = "وبلاگ | صفحه اصلی";
  }, [token]);

  return (
    <Container dir="rtl" className="overflow-auto">
      <Row>
        <Col md="4" lg="3" className={`${style.right} d-none d-md-flex`}>
          <div>
            <h5 className="text-center p-3 ">دوستان جدید</h5>
            <hr />
            <UserList />
          </div>
        </Col>
        <Col lg="3" md="6" className="d-lg-block"></Col>
        <Col md="6" sm="12" lg="9" className={`${style.main} `}>
          <Container>
            <Row>
              <Col lg="6" className="d-none d-lg-flex "></Col>
              <Col md="12" lg="6">
                <PostAllFreinds token={token} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
});

export default Home;
