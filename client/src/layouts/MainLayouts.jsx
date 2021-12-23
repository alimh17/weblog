import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../action/ProfileAction";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import style from "./MainLayout.module.css";

const MainLayouts = ({ children }) => {
  const dark = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getProfileAction(token));
  }, []);

  return (
    <div className={dark ? style.dark : ""}>
      {location.pathname === "/register" ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navbar />
          {children}
        </div>
      )}
    </div>
  );
};

export default MainLayouts;
