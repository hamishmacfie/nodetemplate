let Post = require("../models/Post");

exports.homepage = function (req, res) {
  res.render("homepage");
};

exports.pageOne = (req, res) => {
  res.render("page-one");
};

exports.addPost = (req, res) => {
  res.render("add-post");
};

exports.viewPosts = (req, res) => {
  let posts = new Post();
  posts
    .viewPosts()
    .then((data) => {
      res.render("posts", { data: data });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  let post = new Post(req.body);
  post
    .createPost()
    .then(() => {
      res.status(200).redirect("/posts");
    })
    .catch((err) => console.log(err));
};
