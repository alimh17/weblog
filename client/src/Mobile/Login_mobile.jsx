import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router";
import { useToasts } from "react-toast-notifications";
import { Toast } from "../utils/Toast";
import { schemaLogin } from "../utils/YupSchema";

import style from "./RegAndLog.module.css";

const LoginMobile = ({ actived, setActived, setShowPass, showPass }) => {
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
          if (err.message.slice(err.message.length - 3 === 404)) {
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
        <input
          id="email"
          type="email"
          className="p-2 m-2"
          placeholder="ایمیل"
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
        <input
          id="password"
          className="p-2 m-2"
          placeholder="رمز عبور"
          type={showPass ? "text" : "password"}
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
      <button
        type="button"
        className={`${style.btn} my-3`}
        onClick={(e) => {
          e.preventDefault();
          setActived(false);
        }}
      >
        ثبت نام
      </button>
    </form>
  );
};

export default LoginMobile;
