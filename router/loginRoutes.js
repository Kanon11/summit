const express = require("express");
const router = express.Router();
const controller = require("../controller/loginController");
var decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

router.get("/", decoratedHtmlResponse("login"),controller.getLogin);

module.exports = router;