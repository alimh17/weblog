import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "../Navbar.module.css";

const Setting = () => {
  const [settingOption, setSettingOption] = useState(false);

  const light = useSelector((state) => state.darkMode);

  return (
    <span className="mx-4">
      <AiOutlineSetting
        className={`${style.setting} mx-2`}
        onClick={() => setSettingOption(!settingOption)}
      />
      <span
        className={`${style.settingOption} ${
          settingOption ? "d-block" : "d-none"
        }`}
      >
        <ul>
          <Link to="/setting" className="text-decoration-none w-100">
            <li
              className={`${light ? "text-dark" : "text-dark"} `}
              onClick={() => setSettingOption(false)}
            >
              تنظیمات
              <span>
                <AiOutlineSetting />
              </span>
            </li>
          </Link>
          <Link
            to="/register"
            className="text-decoration-none w-100"
            onClick={(e) => {
              localStorage.removeItem("token");
              setSettingOption(false);
            }}
          >
            <li className="text-danger">
              خروج
              <span>
                <FiLogOut />
              </span>
            </li>
          </Link>
        </ul>
      </span>
    </span>
  );
};

export default Setting;
