const { Post } = require("../models/post");
const { User } = require("../models/user");

module.exports = {
  getAllPosts: (req, res) => {},

  getCurrentUserPosts: (req, res) => {},

  addPost: async (req, res) => {
    try {
      const { title, content, status, userId } = req.body;

      await Post.create({ title, content, privateStatus: status, userId });

      res.status(200).send("Post added successfully");
    } catch (err) {
      console.log("[ERROR IN addPost]");
      console.log(err);
      res.sendStatus(400);
    }
  },

  editPost: (req, res) => {},

  deletePost: (req, res) => {},
};
