import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { URL } from "../../../utils/config.json";

import { setProfileAction } from "../../../action/ProfileAction";
import style from "../Setting.module.css";

const Header = ({ state, submit, profile }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleSetProfile = (e) => {
    dispatch(setProfileAction(e.target.files[0], addToast));
  };

  return (
    <header className={style.header}>
      <div>
        <span className={style.imageWrraper}>
          <img
            alt="background"
            src={`${
              profile.picture
                ? URL + profile.picture.slice(6, profile.picture.length)
                : "http://localhost:3000/images/trianglify-lowres.png"
            }`}
          />
          <span className={style.iconWrraper}>
            <input
              type="file"
              name="picture"
              onChange={(e) => handleSetProfile(e)}
            />
            <BsFillCameraFill className={style.camera} />
          </span>
        </span>
      </div>
    </header>
  );
};

export default Header;
