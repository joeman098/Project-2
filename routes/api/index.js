const router = require("express").Router();
const feedRoute = require("./feeds");
const socialitRoute = require("./socialit");

// Book routes
router.use("/socialit",socialitRoute, )
router.use("/feeds", feedRoute);


module.exports = router;
