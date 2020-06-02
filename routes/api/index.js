const router = require("express").Router();
const contentRoutes = require("./content");
const imagesRoutes = require("./images");
const editRoutes = require("./edit");


// Book routes
router.use("/content", contentRoutes);
router.use("/images", imagesRoutes);
router.use("/edit",editRoutes);

module.exports = router;
