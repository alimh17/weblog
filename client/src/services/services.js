import axios from "axios";

const registerRequest = (data) => {
  axios
    .post("http://localhost:8080/register", {
      data,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export default registerRequest;
