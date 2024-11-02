const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  const postsData = await Post.findAll({
    include: [{ model: User, attributes: ['username'] }],
  });
  const posts = postsData.map((post) => post.get({ plain: true }));
  res.render('homepage', { posts, logged_in: req.session.logged_in });
});

module.exports = router;
