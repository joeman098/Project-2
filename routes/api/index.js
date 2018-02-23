const router = require("express").Router();
const feedRoute = require("./feeds");
const socialitRoute = require("./socialit");
const userRoute = require("./user")
// Book routes
router.use("/socialit",socialitRoute, )
router.use("/feeds", feedRoute);
router.use("/user", userRoute);


module.exports = router;
