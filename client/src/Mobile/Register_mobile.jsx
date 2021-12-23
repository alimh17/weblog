import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { useToasts } from "react-toast-notifications";

import { Toast } from "../utils/Toast";
import { schema } from "../utils/YupSchema";

import style from "./RegAndLog.module.css";

const RegisterMobile = ({
  setActived,
  showPass,
  setShowPass,
  showPassConf,
  setShowPassConf,
}) => {
  const { addToast } = useToasts();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:8080/register", {
          data: values,
        })
        .then((res) => {
          setActived(true);
          addToast("ثبت نام با موفقیت انجام شد", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch((err) => {
          if (err.message.slice(err.message.length - 3) == 422) {
            addToast("کاربری با این ایمیل ثبت شده است", {
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
          id="fullname"
          name="fullname"
          type="text"
          className="p-2 m-2"
          placeholder="نام و نام خانوادگی"
          onChange={formik.handleChange}
          value={formik.values.fullname}
        />
        <span>
          <AiOutlineUser className={style.icon} />
        </span>
        {formik.errors.fullname ? (
          <Toast err={formik.errors.fullname} touch={formik.touched.fullname} />
        ) : null}
      </div>
      <div>
        <input
          id="email"
          name="email"
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
          <Toast err={formik.errors.email} touch={formik.touched.email}></Toast>
        ) : null}
      </div>
      <div>
        <input
          id="password"
          name="password"
          type={showPass ? "text" : "password"}
          className="p-2 m-2"
          placeholder="رمز عبور"
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
      <div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showPassConf ? "text" : "password"}
          className="p-2 m-2"
          placeholder="تکرار رمز عبور"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <span onClick={() => setShowPassConf(!showPassConf)}>
          {showPassConf ? (
            <BiShowAlt className={style.icon} />
          ) : (
            <BiHide className={style.icon} />
          )}
        </span>
        {formik.errors.confirmPassword ? (
          <Toast
            err={formik.errors.confirmPassword}
            touch={formik.touched.confirmPassword}
          />
        ) : null}
      </div>
      <button type="submit" className="my-2">
        ثبت نام
      </button>
      <button
        className={`${style.btn} my-3`}
        onClick={(e) => {
          e.preventDefault();
          setActived(true);
        }}
      >
        ورود
      </button>
    </form>
  );
};

export default RegisterMobile;
