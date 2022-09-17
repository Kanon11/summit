const express = require("express");
const router = express.Router();
const controller = require("../controller/inboxController");
var decoratedHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

router.get("/",decoratedHtmlResponse("inbox"), controller.inbox);

module.exports = router;