import React, { Fragment } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Inputs = ({ dispatch, state, bioValue, userNameInput }) => {
  return (
    <Fragment>
      <input
        type="text"
        id="bio"
        ref={bioValue}
        placeholder="بیوگرافی"
        onChange={(e) => {
          dispatch({
            type: "BIO",
            payload: { ...state, bio: e.target.value },
          });
        }}
      />
      <span>
        <BsInfoCircle />
      </span>
      <input
        type="text"
        id="username"
        ref={userNameInput}
        placeholder="نام کاربری"
        onChange={(e) => {
          dispatch({
            type: "USER_NAME",
            payload: { ...state, username: e.target.value },
          });
        }}
      />
      <span>
        <MdAlternateEmail />
      </span>
    </Fragment>
  );
};

export default Inputs;
