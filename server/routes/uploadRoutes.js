const express = require("express");
const router = express.Router();
const { upload } = require("../upload_multer");
const controller = require("../controllers/eventController");

router.post("/upload", upload.fields([{ name: "images" }]), controller.upload);
router.post("/getUsers", controller.getUsers);
router.post("/getEvents", controller.getEvents);


module.exports = router;