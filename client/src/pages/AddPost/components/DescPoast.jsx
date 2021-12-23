import React from "react";
import { Toast } from "react-bootstrap";
import { MdDescription } from "react-icons/md";

import style from "../addPost.module.css";

const DescPoast = ({ formik }) => {
  return (
    <div>
      <label htmlfor="desc" className={style.descLabel}>
        توضیحات
      </label>
      <input
        type="text"
        name="desc"
        id="desc"
        onChange={formik.handleChange}
        value={formik.values.desc}
      />
      {formik.errors.desc ? (
        <Toast err={formik.errors.desc} touch={formik.touched.desc} />
      ) : null}
      <span>
        <MdDescription className={style.desc_icon} />
      </span>
    </div>
  );
};

export default DescPoast;
