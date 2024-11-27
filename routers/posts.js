const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

const host = process.env.HOST;
const port = process.env.PORT;

router.get("/", (req, res) => postsController.index(req, res, host, port));
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.patch("/:id", postsController.modify);
router.delete("/:id", postsController.destroy);

module.exports = router;
