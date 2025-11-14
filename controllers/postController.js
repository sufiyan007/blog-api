const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.create({
    title,
    content,
    userId: req.user.id
  });

  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.userId !== req.user.id) {
    return res.status(403).json({ msg: "Not allowed" });
  }

  post.title = req.body.title;
  post.content = req.body.content;

  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.userId !== req.user.id) {
    return res.status(403).json({ msg: "Not allowed" });
  }

  await post.deleteOne();
  res.json({ msg: "Deleted" });
};
