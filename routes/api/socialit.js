const router = require("express").Router();
const socialitController = require("../../controllers/socialitController");

// Matches with "/api/socialit"
router.route("/")
  .get(socialitController.findAll)
  .post(socialitController.create);

// Matches with "/api/socialit/:id"
router
  .route("/:id")
  .get(socialitController.findById)
  .put(socialitController.update)
  .delete(socialitController.remove);

module.exports = router;
