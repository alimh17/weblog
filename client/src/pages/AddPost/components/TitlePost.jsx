import React from "react";
import { MdTitle } from "react-icons/md";
import { Toast } from "../../../utils/Toast";

import style from "../addPost.module.css";

const TitlePost = ({ formik }) => {
  return (
    <div>
      <label htmlfor="title" className={style.TitleLabel}>
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title ? (
        <Toast err={formik.errors.title} touch={formik.touched.title} />
      ) : null}
      <span>
        <MdTitle className={style.title_icon} />
      </span>
    </div>
  );
};

export default TitlePost;
