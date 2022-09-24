const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");
var decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

// login page showing
router.get("/",decoratedHtmlResponse("users") ,controller.getUsers);

module.exports = router;