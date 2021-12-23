const fs = require("fs");

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const {
  updateProfileUtil,
  mergeProfileUtil,
  updataInformationUtils,
  mergeInformationUtils,
} = require("../utils/postControllUtils");

exports.NewPost = async (req, res) => {
  try {
    if (req.file) {
      const decoded = jwt.decode(req.body.token);
      const { email } = decoded.data.data;
      const post = await User.findOneAndUpdate(
        { email },
        {
          $push: {
            post: {
              _id: new mongoose.Types.ObjectId(),
              title: req.body.title,
              desc: req.body.title,
              file: req.file.path,
            },
          },
        }
      );
      await post.save();

      res.status(200).json({ success: true, data: "file is uploaded" });
    } else {
      res
        .status(500)
        .json({ success: false, message: "file is not definead", status: 500 });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.GetUserPosts = async (req, res) => {
  try {
    const { data } = req.body;
    const decoded = jwt.decode(data);
    const { email } = decoded.data.data;
    const post = await User.find({ email });
    post.map((item) => {
      res.status(200).json({ success: true, data: item.post });
    });
  } catch (err) {
    const decoded = jwt.decode(req.body.token);

    res.status(500).json({ success: false, data: err });
  }
};

exports.DeleteUserPost = async (req, res) => {
  try {
    const decoded = jwt.decode(req.body.token);
    const { email } = decoded.data.data;
    const post = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          post: req.body.posts,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const decoded = jwt.decode(req.body.token);
    const { email } = decoded.data.data;
    let user = await User.findOne({ email });
    if (user.profile.length <= 0) {
      user = updateProfileUtil(email, req.file.path);
    } else {
      mergeProfileUtil(email, req.file.path);
      user.save();
      fs.unlinkSync(user.profile[0].picture);
    }

    res
      .status(200)
      .json({ success: true, message: "save changed", data: user.profile });
  } catch (err) {
    console.log(err);
  }
};

exports.updateUserInformation = async (req, res) => {
  try {
    const decoded = jwt.decode(req.body.data.token);
    const { username, bio } = req.body.data;
    const { email } = decoded.data.data;
    let user = await User.findOne({ email });

    if (user.profile.length <= 0) {
      user = updataInformationUtils(email, username, bio);
    } else {
      user = mergeInformationUtils(email, username, bio);
    }
    const updatedUser = await user;
    res.status(200).json({
      success: true,
      message: "Information is upgraded!",
      data: updatedUser.profile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "oops!" });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const decoded = jwt.decode(req.body.data);
    const { email } = decoded.data.data;

    const user = await User.findOne({ email });
    res.status(200).json(user.profile);
  } catch (err) {
    console.log(err);
  }
};
