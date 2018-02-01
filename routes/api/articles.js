const router = require("exress").Router();
const articleController = require("../../controllers/articleController");

//Home page
router.route("/")
	.get(articleController.findAll);
	.post(articleController.create);

//Matches with id of aricle
router.route("/:id")
	.get(articleController.findById)
	.put(articleController.update)
	.delete(articleController.remove);

module.exports = router; 