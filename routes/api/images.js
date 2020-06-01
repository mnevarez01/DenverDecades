const router = require("express").Router();
const imagesController = require("../../controllers/imagesController");

// Matches with "/api/images"
router.route("/")
  .get(imagesController.findAll)
  .post(imagesController.create);

// Matches with "/api/images/:id"
router
  .route("/:id")
  .get(imagesController.findById)
  .put(imagesController.update)
  .delete(imagesController.remove);

module.exports = router;
