import React from "react";

import style from "../addPost.module.css";

const Button = () => {
  return (
    <div>
      <div className={style.buttonContainer}>
        <button type="submit">افزودن</button>
      </div>
    </div>
  );
};

export default Button;
