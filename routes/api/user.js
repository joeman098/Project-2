const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/uploadMeme")
    .post(userController.uploadMeme);
router.route("/getFriends")
    .get(userController.getFriends);
router.route("/getFeed")
    .get(userController.getFeed);
router.route("/getMemes")
    .get(userController.getMemes);
router.route("/getMemesByUser")
    .post(userController.getMemesByUser);
router.route("/getSession")
    .get(userController.getSession);





module.exports = router;
