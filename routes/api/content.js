const router = require("express").Router();
const contentController = require("../../controllers/contentController");

// Matches with "/api/content"
router.route("content/")
  .get(contentController.findAll)
  .post(contentController.create);

// Matches with "/api/content/:id"
router
  .route("content/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

module.exports = router;
