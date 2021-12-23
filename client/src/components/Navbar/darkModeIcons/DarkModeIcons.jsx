import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { darkModeAction } from "../../../action/action";

import style from "../Navbar.module.css";

const DarkModeIcons = () => {
  const light = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      {light ? (
        <BsFillSunFill
          className={`${style.setting} mx-2`}
          onClick={() => {
            dispatch(darkModeAction());
          }}
        ></BsFillSunFill>
      ) : (
        <BsFillMoonStarsFill
          className={`${style.setting} mx-2`}
          onClick={() => {
            dispatch(darkModeAction());
          }}
        />
      )}
    </>
  );
};

export default DarkModeIcons;
