const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.homepage);

router.get("/page-one", postController.pageOne);

router.get("/add-post", postController.addPost);
router.get("/posts", postController.viewPosts);

// Post routes
router.post("/create", postController.createPost);

module.exports = router;
