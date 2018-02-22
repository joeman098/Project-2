const router = require("express").Router();
const feedRoute = require("./feeds");
const socialitRoute = require("./feeds");

// Book routes
router.use("/socialit",socialitRoute)
router.use("/feeds", feedRoute);


module.exports = router;
