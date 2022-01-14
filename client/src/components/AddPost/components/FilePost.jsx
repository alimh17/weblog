import React from "react";
import { Toast } from "react-bootstrap";
import { BsImages } from "react-icons/bs";
import { useSelector } from "react-redux";

import style from "../addPost.module.css";

const FilePost = ({ formik }) => {
  const dark = useSelector((state) => state.darkMode);

  return (
    <div className={style.file}>
      <label htmlFor="image" className={style.imageLable}>
        فایل
      </label>
      <div className={style.inputsCont}>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          className="text-dark"
          onChange={(e) => {
            formik.setFieldValue("file", e.target.files[0]);
          }}
        />
        {formik.errors.file ? (
          <Toast err={formik.errors.file} touch={formik.touched.file} />
        ) : null}
        <div className={`${style.input} ${dark ? "bg-light" : ""}`}></div>
      </div>
      <span className={style.img_icon_container}>
        <BsImages className={style.img_icon} />
      </span>
    </div>
  );
};

export default FilePost;
