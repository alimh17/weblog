const router = require("express").Router();
const multer = require("multer");

const {
  NewPost,
  GetUserPosts,
  DeleteUserPost,
  updateUserProfile,
  getUserProfile,
  updateUserInformation,
} = require("../controllers/postController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "_" + Math.round(Math.random() * 1e9) + file.originalname
    );
  },
});
const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/profile");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "_" + Math.round(Math.random() * 1e9) + file.originalname
    );
  },
});

const upload = multer({ storage: storage }).single("file");
const uploadPro = multer({ storage: profileStorage }).single("picture");

router.post("/new_post", upload, NewPost);
router.post("/get_user_posts", GetUserPosts);
router.put("/delete_user_posts", DeleteUserPost);
router.put("/update_profile", uploadPro, updateUserProfile);
router.post("/update_profile", updateUserInformation);
router.post("/get_profile", getUserProfile);

module.exports = router;
