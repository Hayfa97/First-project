const express = require("express");
const user = require("../models/user");
const post = require("../models/post");
const like = require("../models/like");
const { validation, postCheck } = require("../middlewares/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/passport");
const router = express.Router();
const isOrganisator = require("../middlewares/isOrganisator");
// create a post
router.post(
  "/",
  isAuth(),
  isOrganisator,
  postCheck(),
  validation,
  async (req, res) => {
    //const user = await user.findById(req.user.id).select('-password');
    const newPost = new post({
      user: req.user._id,
      destination: req.body.destination,
      date: req.body.date,
      duration: req.body.duration,
    });
    try {
      const savedPost = await newPost.save();
      res.status(200).send({ savedPost, msg: "post saved " });
    } catch (error) {
      res.status(400).send(error);
    }
  }
);
// get all posts
router.get("/getAllPosts", async (req, res) => {
  try {
    const Posts = await post.find();
    res.status(200).send(Posts);
  } catch (error) {
    res.status(400).send(error);
  }
});
//delete post by id
router.delete("/:id", isAuth(), isOrganisator, async (req, res) => {
  try {
    const deletePost = await post.findByIdAndRemove({ _id: req.params.id });
    res.status(200).send({ deletePost, msg: "delted with success" });
  } catch (error) {
    res.status(400).send({ error: "person is not found" });
  }
});
//findone by id and update
router.patch(
  "/updatePost/:id",
  isAuth(),
  isOrganisator,
  async (req, res) => {
    try {
        console.log(req.params.id)
      const updatedPost = await post.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.status(200).send({ updatedPost, msg: "post successfully updated" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);
//find by destination
router.get("/findByDestination/:destination", isAuth(), async (req, res) => {
  try {
    const findBYDestination = await post
      .findOne({ destination: req.params.destination })
      .exec();
    res.send(findBYDestination);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//like post
router.patch("/:id/likePost", isAuth(), async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await post.findById(id);

  const updatedPost = await post.findByIdAndUpdate(
    id,
    { likeCount: like.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
});

module.exports = router;
