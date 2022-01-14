import React from "react";
import { getNowTime } from "../utils/time";

import style from "../addPost.module.css";

const Time = () => {
  let { d, h, m, month, w } = getNowTime();

  return (
    <div className={style.timeComponent}>
      <span className={style.month}>
        <p>{d}</p>
        <p>{month}</p>
      </span>
      <span className={style.week}>
        <p>{w}</p>
      </span>
      <span className={style.time}>
        <p className={style.min}>{m}</p>
        <span>:</span>
        <p className={style.hourse}>{h}</p>
      </span>
    </div>
  );
};

export default Time;
