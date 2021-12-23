const router = require("express").Router();

const {
  userLogin,
  userRegister,
  getAllUsers,
  addFreind,
} = require("../controllers/userController");

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/get_all_user", getAllUsers);
router.post("/add_freind", addFreind);

module.exports = router;
