import React from "react";

import style from "../addPost.module.css";

const Idea = () => {
  return (
    <a
      href="https://www.pinterest.com"
      className={style.IdeaContainer}
      target="_blank"
    >
      <img alt="idea" src={process.env.PUBLIC_URL + "/images/Idea.png"} />
      <span>ایده بگیر</span>
    </a>
  );
};

export default Idea;
