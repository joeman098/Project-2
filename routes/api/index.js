const router = require("express").Router();
const feedRoute = require("./feeds");
const socialitRoute = require("./socialit");
const userRoute = require("./user");
const channelRoute = require("./channel");
const authRoute = require("./auth");

// Book routes
router.use("/socialit",socialitRoute, )
router.use("/feeds", feedRoute);
router.use("/user", userRoute);
router.use("/channel", channelRoute);
router.use("/auth", authRoute);

module.exports = router;
