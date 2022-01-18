const router = require("express").Router();

const {
  userLogin,
  userRegister,
  getAllUsers,
  addFreind,
  removeFreind,
  getAllFriends,
  getAllPostFriends,
} = require("../controllers/userController");

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/get_all_user", getAllUsers);
router.post("/add_freind", addFreind);
router.post("/remove_freind", removeFreind);
router.post("/all_freinds", getAllFriends);
router.post("/all_freinds/posts", getAllPostFriends);

module.exports = router;
