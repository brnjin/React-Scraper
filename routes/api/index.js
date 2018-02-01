const router = require("express").Router();
const articleRoutes = require("./articles");

//Saved articles routes
router.use("/articles", aricleRoutes);

module.exports = router;