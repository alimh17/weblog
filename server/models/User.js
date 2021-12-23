const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: [
        {
          bio: {
            type: String,
            default: "",
          },
          username: {
            type: String,
            default: "",
          },
          picture: {
            type: String,
            default: "",
          },
        },
      ],
    },
    friends: {
      type: [],
    },
    post: {
      type: [
        {
          _id: mongoose.Types.ObjectId,
          file: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          desc: {
            type: String,
          },
          createAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
