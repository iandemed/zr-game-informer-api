const express = require("express");
let router = new express.Router();
const reviewsController = require(`../controllers/review`);
//redirect to the reviews controller
router.get("/", reviewsController.index);
router.get("/:id", reviewsController.findById);
router.post("/", reviewsController.create);
router.put("/:id", reviewsController.editById);
router.delete("/:id", reviewsController.deleteById);

module.exports = router;
