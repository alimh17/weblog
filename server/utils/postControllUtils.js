const User = require("../models/User");

exports.updateProfileUtil = async (email, path) => {
  const user = await User.findOneAndUpdate(
    { email },
    {
      $set: {
        profile: [
          {
            picture: path,
          },
        ],
      },
    }
  );

  return user;
};

exports.mergeProfileUtil = async (email, path) => {
  const user = await User.findOneAndUpdate(
    { email, "profile.index": 0 },
    {
      $set: {
        "profile.$.picture": path,
      },
    }
  );

  return user;
};

exports.updataInformationUtils = async (email, username, bio) => {
  const user = await User.findOneAndUpdate(
    { email },
    {
      $set: {
        profile: [
          {
            username: username,
            path: path,
          },
        ],
      },
    }
  );

  return user;
};

exports.mergeInformationUtils = async (email, username, bio) => {
  const user = await User.findOneAndUpdate(
    { email, "profile.index": 0 },
    {
      $set: {
        "profile.$.username": username,
        "profile.$.bio": bio,
      },
    }
  );

  return user;
};
