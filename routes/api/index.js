const router = require("express").Router();
const feedRoute = require("./feeds");
const userRoute = require("./user");

// Book routes
router.use("/feeds", feedRoute);
router.use("/user", userRoute);


module.exports = router;
