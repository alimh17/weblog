import React from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BiHide, BiShowAlt } from "react-icons/bi";

import { URL } from "../../utils/config.json";
import { schema } from "../../utils/YupSchema";
import style from "./Register.module.css";
import { Toast } from "../../utils/Toast";

const Register = ({
  actived,
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
        .post(`${URL}/register`, {
          data: values,
        })
        .then((res) => {
          actived(true);
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
        <label htmlFor="fullname">نام و نام خانوادگی</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          className="p-2 m-2"
        />
        <span>
          <AiOutlineUser className={style.icon} />
        </span>
        {formik.errors.fullname ? (
          <Toast err={formik.errors.fullname} touch={formik.touched.fullname} />
        ) : null}
      </div>
      <div>
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 m-2"
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
        <label htmlFor="password">رمز عبور</label>
        <input
          id="password"
          name="password"
          type={showPass ? "text" : "password"}
          onChange={formik.handleChange}
          value={formik.values.password}
          className="p-2 m-2"
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
        <label htmlFor="#passConfirm">تکرار رمز عبور</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={`${showPassConf ? "text" : "password"}`}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="p-2 m-2"
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

      <button
        type="submit"
        className="my-2"
        onChange={(e) => e.preventDefault()}
      >
        ثبت نام
      </button>
    </form>
  );
};

export default Register;
