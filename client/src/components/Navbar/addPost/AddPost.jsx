import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "../Navbar.module.css";

const AddPost = () => {
  const light = useSelector((state) => state.darkMode);

  return (
    <span className="d-flex justify-content-center">
      <Link
        to="/add_post"
        className={light ? style.addPostLinkDark : style.addPostLinkLight}
      >
        <h6 className="text-dark d-none d-md-block">افزودن پست</h6>
        <AiOutlinePlusCircle className={`${style.plusIcon} rotate `} />
      </Link>
    </span>
  );
};

export default AddPost;
