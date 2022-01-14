import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { URL } from "../../../utils/config.json";
import { schemaNewPost } from "../../../utils/YupSchema";
import TitlePost from "./TitlePost";
import DescPoast from "./DescPoast";
import FilePost from "./FilePost";
import Button from "./Button";

const Form = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      file: null,
    },

    validationSchema: schemaNewPost,

    onSubmit: (values) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("desc", values.desc);
        formData.append("file", values.file);
        formData.append("token", localStorage.getItem("token"));
        axios
          .post(`${URL}/post/new_post`, formData)
          .then((res) => {
            if (res.status === 200) {
              addToast("پست با موفقیت اضافه شد", {
                appearance: "success",
                autoDismiss: true,
              });
              navigate("/user/dashboard", { replace: true });
            }
          })
          .catch((err) => {
            if (err.message.slice(-3) === 500) {
              addToast("تصویر برای پست الزامی میباشد", {
                appearance: "warning",
                autoDismiss: true,
              });
            } else {
              console.log(err);
            }
          });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TitlePost formik={formik} />
        <DescPoast formik={formik} />
        <FilePost formik={formik} />
        <Button />
      </form>
    </>
  );
};

export default Form;
