const router = require("express").Router();
const editController = require("../../controllers/editController");

// Matches with "/api/content"
router.route("/")
  .get(editController.findAll)
  .post(editController.create);

// Matches with "/api/content/:id"
router
  .route("/:id")
  .get(editController.findById)
  .put(editController.update)
  .delete(editController.remove);

module.exports = router;