import React from "react";
import { Link } from "react-router-dom";

import style from "../Navbar.module.css";

const Logo = () => {
  return (
    <span>
      <Link to="/">
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          className={style.logoImg}
        />
      </Link>
    </span>
  );
};

export default Logo;
