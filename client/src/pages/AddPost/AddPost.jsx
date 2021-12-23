import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";

import { schemaNewPost } from "../../utils/YupSchema";
import { URL } from "../../utils/config.json";

import style from "./addPost.module.css";
import TitlePost from "./components/TitlePost";
import DescPoast from "./components/DescPoast";
import FilePost from "./components/FilePost";

const AddPost = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "وبلاگ | افزودن پست جدید";
  }, []);

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
              navigate("/user", { replace: true });
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
    <Container fluid dir="rtl">
      <Row>
        <Col md="4" className={style.right}>
          <article className={style.article}>
            <img
              alt="profile"
              src="https://i.pinimg.com/564x/0e/64/58/0e64589e12b9c7cca0e92ff099fcbd4a.jpg"
            />
            <h5 className={style.bio}>i love music and football</h5>
            <ul>
              <li>music</li>
              <li>football</li>
              <li>fashion</li>
              <li>song</li>
            </ul>
          </article>
        </Col>
        <Col md="8">
          <section className={style.section}>
            <h3>افزودن پست جدید</h3>
            <form onSubmit={formik.handleSubmit}>
              <TitlePost formik={formik} />
              <DescPoast formik={formik} />
              <FilePost formik={formik} />
              <button type="submit">افزودن</button>
            </form>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPost;
