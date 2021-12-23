const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname
    );
  },
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
