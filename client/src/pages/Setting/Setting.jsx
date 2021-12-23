import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "./reducer";
import { FaUserFriends } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";

import style from "./Setting.module.css";
import { getProfileAction } from "../../action/ProfileAction";
import { useEffect } from "react";
import Header from "./components/Header";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import SettingModal from "./components/changeSettingModal/SettingModal";

const Setting = () => {
  const [state, dispatch] = useReducer(reducer, {
    picture: null,
    bio: "",
    username: "",
  });

  const [displayModal, setDisplayModal] = useState(false);

  const token = localStorage.getItem("token");

  const dispatchRe = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatchRe(getProfileAction(token));
  }, []);

  return (
    <>
      <Container fluid dir="rtl">
        <Row>
          <Col md="12">
            <Header state={state} dispatch={dispatch} profile={profile} />
          </Col>
          <Col md="12" className={style.navigate}>
            <h1>
              {profile.username !== "" ? profile.username : "ali mohamaid"}
            </h1>
            {/* <ul>
              <li>
                دوستان
                <FaUserFriends />
              </li>
              <li>
                پست ها
                <BsFillSignpostSplitFill />
              </li>
              <li onClick={(e) => setDisplayModal(true)}>
                تغییر مشخصات
                <GrUserSettings />
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
      <SettingModal show={displayModal} onHide={() => setDisplayModal(false)} />
    </>
  );
};

export default Setting;
