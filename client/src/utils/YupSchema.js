import * as yup from "yup";

export const schema = yup.object().shape({
  fullname: yup
    .string()
    .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
    .max(255, "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد")
    .required("نام و نام خانوادگی الزامی می باشد"),

  email: yup
    .string()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی می باشد"),
  password: yup
    .string()
    .min(4, "رمز عبور نباید کمتر از 4 کاراکتر باشد")
    .max(255, "رمز عبور نباید بیشتر از 255 کاراکتر باشد")
    .required("رمز عبور الزامی می باشد"),
  confirmPassword: yup
    .string()
    .min(4, "تکرار رمز عبور نباید کمتر از 4 کاراکتر باشد")
    .max(255, "تکرار رمز عبور نباید بیشتر از 255 کاراکتر باشد")
    .required("تکرار رمز عبور الزامی می باشد")
    .oneOf([yup.ref("password")], "رمز عبور و تکرار رمز عبور یکسان نمی باشند"),
});

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی می باشد"),
  password: yup
    .string()
    .min(4, "رمز عبور نباید کمتر از 4 کاراکتر باشد")
    .max(255, "رمز عبور نباید بیشتر از 255 کاراکتر باشد")
    .required("رمز عبور الزامی می باشد"),
});

export const schemaNewPost = yup.object().shape({
  title: yup
    .string()
    .min(4, "عنوان نباید کمتر از 4 کارارکتر باشد")
    .max(60, "عنوان نباید بیشتر از 60 کاراکتر باشد")
    .required("عنوان پست الزامی میباشد"),
  desc: yup
    .string()
    .min(4, "توضیحات پست نباید کمتر از 4 کاراکتر باشد")
    .max(255, "توضیحات پست نباید بیشتر از 255 کاراکتر باشد"),
  // file: yup.array().nullable(),
});
// export function checkIfFilesAreTooBig(file) {
//   let validate = true;
//   if (file) {
//     const size = file.size / 1024 / 1024;
//     if (size > 10) {
//       validate = false;
//     }
//     return validate;
//   }
// }

// export function checkIfFilesAreCorrectType(file) {
//   let valid = true;
//   if (file) {
//     if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
//       valid = false;
//     }
//   }
//   return valid;
// }
