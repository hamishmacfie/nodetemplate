// Database connection
const db = require("../config/dbConfig");

let Post = function (data) {
  this.data = data;
  this.errors = [];
};

// Cleanup the data
Post.prototype.cleanUp = function () {
  if (typeof this.data.title != "string") {
    this.data.name = "";
  }
  if (typeof this.data.content != "string") {
    this.data.content = "";
  }

  // Remove white space
  this.data = {
    title: this.data.title.trim(),
    content: this.data.content.trim(),
    published: new Date(),
  };
};

Post.prototype.validate = function () {
  return new Promise(async (resolve, reject) => {
    if (this.data.title == "") {
      this.errors.push("Please enter a title");
    }
    if (this.data.content == "") {
      this.errors.push("Please enter some content");
    }
    resolve();
  });
};

Post.prototype.createPost = function () {
  return new Promise(async (resolve, reject) => {
    this.cleanUp();
    await this.validate();

    if (!this.errors.length) {
      const sql =
        "INSERT INTO posts (title, content, published) VALUES (?,?,?);";
      db.query(
        sql,
        [this.data.title, this.data.content, this.data.published],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    } else {
      reject(this.errors);
    }
  });
};

Post.prototype.viewPosts = function () {
  return new Promise(async (resolve, reject) => {
    const sql = "SELECT * FROM posts ORDER BY id DESC";
    db.query(sql, (err, results) => {
      if (err) throw err;
      resolve(results);
    });
  });
};

module.exports = Post;
