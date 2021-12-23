import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router";
import { HiOutlineMail } from "react-icons/hi";
import { BiHide, BiShowAlt } from "react-icons/bi";

import { schemaLogin } from "../../utils/YupSchema";
import style from "./Register.module.css";
import { Toast } from "../../utils/Toast";

const Login = ({ setShowPass, showPass }) => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: schemaLogin,

    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/login", {
          data: values,
        })
        .then((res) => {
          localStorage.setItem("token", res.data);
          navigate("/", { replace: true });
          addToast("ورود با موفقیت انجام پذیرفت", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch((err) => {
          if (err.message.slice(err.message.length - 3 == 404)) {
            addToast("ایمیل یا رمز عبور صحیح نمی باشد", {
              appearance: "error",
              autoDismiss: true,
            });
          } else {
            addToast("لطفا اطلاعات را به درستی وارد نمایید", {
              appearance: "error",
              autoDismiss: true,
            });
          }
        });
    },
  });

  return (
    <form className={style.form} onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 m-2"
          placeholder="example.com@"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span>
          <HiOutlineMail className={style.icon} />
        </span>
        {formik.errors.email ? (
          <Toast err={formik.errors.email} touch={formik.touched.email} />
        ) : null}
      </div>
      <div>
        <label htmlFor="password">رمز عبور</label>
        <input
          id="password"
          name="password"
          type={showPass ? "text" : "password"}
          className="p-2 m-2"
          placeholder="****"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? (
            <BiShowAlt className={style.icon} />
          ) : (
            <BiHide className={style.icon} />
          )}
        </span>
        {formik.errors.password ? (
          <Toast err={formik.errors.password} touch={formik.touched.password} />
        ) : null}
      </div>
      <button type="submit" className="my-2">
        ورود
      </button>
    </form>
  );
};

export default Login;
