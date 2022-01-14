import React from "react";

import style from "../addPost.module.css";

const Maker = () => {
  return (
    <a
      href="https://www.canva.com/fa_ir"
      className={style.makerContainer}
      target="_blank"
    >
      <img alt="idea" src={process.env.PUBLIC_URL + "/images/maker.png"} />
    </a>
  );
};

export default Maker;
