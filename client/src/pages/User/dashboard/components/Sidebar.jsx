import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight, BsBorderAll, BsStar } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { URL } from "../../../../utils/config.json";

import style from "../Dashboard.module.css";

const SidebarComponent = ({ click, active, setResize, resize }) => {
  const profile = useSelector((state) => state.profile);

  const [items, setItems] = useState([
    {
      id: 1,
      val: "پست جدید",
      class: "items",
      target: "/add_post",
      icon: <MdPostAdd />,
    },
    { id: 2, val: "همه پست ها", class: "items", icon: <BsBorderAll /> },
    { id: 3, val: "علاقه مندی ها", class: "items", icon: <BsStar /> },
    { id: 4, val: "دوستان ", class: "items", icon: <FaUserFriends /> },
    { id: 5, val: "خروج", class: "items", icon: <FiLogOut /> },
  ]);

  return (
    <article>
      <span className={style.ToggleSidebar} onClick={() => setResize(!resize)}>
        {resize ? <BsArrowLeft className="fs-4" /> : <BsArrowRight />}
      </span>
      <div className={style.profile}>
        <img
          alt="avatar"
          style={{
            width: resize ? "5rem" : "10rem",
            height: resize ? "5rem" : "10rem",
          }}
          src={
            profile.picture
              ? URL + profile.picture.slice(6, profile.picture.length)
              : ""
          }
        />
      </div>
      <ul>
        {items.map((el) => (
          <li
            key={el.id}
            id={el.id}
            onClick={() => click(el.id)}
            style={{ width: resize ? "70%" : "90%" }}
            className={
              active !== null && el.id === active.activeLink
                ? style.activeItem
                : ""
            }
          >
            {resize ? el.icon : el.val}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SidebarComponent;
