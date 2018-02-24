const router = require("express").Router();
const channelController = require("../../controllers/channelController");


router.route("/getMemesByChannelName")
    .post(channelController.getMemesByChannelName);
router.route("/getMemesByChannelId")
    .post(channelController.getMemesByChannelId);
router.route("/getMemesByChannelTwitchId")
    .post(channelController.getMemesByChannelTwitchId);
router.route("/createChannel")
    .post(channelController.createChannel);





module.exports = router;
