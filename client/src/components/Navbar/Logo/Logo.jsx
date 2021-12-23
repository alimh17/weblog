import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <span>
      <Link to="/">
        <img alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} />
      </Link>
    </span>
  );
};

export default Logo;
