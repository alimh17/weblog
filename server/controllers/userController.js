const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, checkRegister } = require("../utils/validationForm");
const User = require("../models/User");
const _ = require("lodash");
const { decoded } = require("../utils/decode");

exports.userLogin = async (req, res) => {
  const val = check({
    email: req.body.data.email,
    password: req.body.data.password,
  });
  if (typeof val === "object") {
    res.status(500).json("error");
  }
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: req.body,
    },
    "secret"
  );
  const { email, password } = req.body.data;
  const user = await User.find({ email });
  user.map(async (item) => {
    const pass = await bcrypt.compare(password, item.password);
    if (pass) {
      res.status(200).json(token);
    } else {
      res.status(404).json({ success: false, message: "user is not found" });
    }
  });
  if (user.length === 0) {
    res.status(404).json({ success: false, message: "user is not found" });
  }
};

exports.userRegister = async (req, res) => {
  try {
    const val = checkRegister({
      fullname: req.body.data.fullname,
      email: req.body.data.email,
      password: req.body.data.password,
      confirmPassword: req.body.data.confirmPassword,
    });

    const { fullname, email, password } = req.body.data;

    if (typeof val === "object") {
      res.status(500).json("error");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        fullname,
        email,
        password: hash,
      });
      await user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res.status(422).json({
              success: false,
              message: "email must is unique",
              code: 422,
            });
          }
        } else {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              token: req.body.data,
            },
            "secret"
          );
          res.status(200).json({ success: true, token });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getAllUsers = async (req, res) => {
  const user = await User.find();
  const decode = decoded(req.body.data);
  const { email } = decode.data.data;

  let data = [];

  const userFilter = _.filter(user, (el) => el.email !== email);
  userFilter.forEach((item, index) => {
    if (item.profile.length > 0) {
      item.profile.map((el) => {
        data.push(_.concat(item.fullname, [el.picture], item._id));
      });
    } else {
      data.push(_.concat(item.fullname, [item.profile], item._id));
    }
  });

  res.status(200).json({ success: true, data });
};

exports.addFreind = async (req, res) => {
  const id = req.body.data[2];
  const decode = decoded(req.body.Token);
  const { email } = decode.data.data;
  const friend = await User.findById(id);

  const user = await User.findOneAndUpdate(
    { email },
    {
      $push: {
        friends: friend,
      },
    }
  );

  const friends = _.uniqWith(user.friends, _.isEqual);

  await User.findOneAndUpdate(
    { email },
    {
      $set: {
        friends,
      },
    }
  );

  user.save();
  res.status(200).json("success");
};
