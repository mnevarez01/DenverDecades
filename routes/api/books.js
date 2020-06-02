const router = require("express").Router();
const contentController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(contentController.findAll)
  .post(contentController.create);

  router.route("/range")
    .get(contentController.findByRange);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

module.exports = router;
