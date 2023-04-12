const { Router } = require("express");
const router = Router();
const {
  addNewPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.get("/all", getAllPost);
router.post("/add", addNewPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
