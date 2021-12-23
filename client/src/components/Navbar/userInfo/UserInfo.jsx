import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../../utils/config.json";

import style from "../Navbar.module.css";

const UserInfo = () => {
  const light = useSelector((state) => state.darkMode);
  const profile = useSelector((state) => state.profile);

  return (
    <span className="mx-4">
      <Link
        to="/user"
        className={light ? style.userLinkDark : style.userLinkLight}
      >
        <img
          alt="avatar"
          src={`${
            profile.picture
              ? URL + profile.picture.slice(6, profile.picture.length)
              : ""
          }`}
        />
        <p className={"text-dark mx-2"}>
          {profile.username ? profile.username : ""}
        </p>
      </Link>
    </span>
  );
};

export default UserInfo;
