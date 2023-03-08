require("dotenv").config({ path: "../.env" });

const { login, logout, register } = require("./controllers/auth");
const {
  getAllPosts,
  getCurrentUserPosts,
  addPost,
  editPost,
  deletePost,
} = require("./controllers/posts");
const { isAuthenticated } = require("./middleware/isAuthenticated");

// Sequelize dependencies
const { sequelize } = require("./util/database");
const { Post } = require("./models/post");
const { User } = require("./models/user");

const express = require("express");
const cors = require("cors");
const { PORT } = process.env; //** || 8080

const app = express();

app.use(express.json());
app.use(cors());

// auth
app.post("/register", register);
app.post("/login", login);

app.get("/posts"), getAllPosts;

app.get("/userposts/:userId", getCurrentUserPosts);
app.post("/posts", isAuthenticated, addPost);
app.put("/posts/:id", isAuthenticated, editPost);
app.delete("/posts/:id", isAuthenticated, deletePost);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Error connecting to db");
    console.log(err);
  });
