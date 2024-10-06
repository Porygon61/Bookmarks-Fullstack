const express = require('express');
const router = express.Router();
const { Bookmarks } = require('../models');

router.get('/', async (req, res) => {
	const listOfBookmarks = await Bookmarks.findAll();
    res.json(listOfBookmarks);
});

router.post('/', async (req, res) => {
	const post = req.body;
	await Bookmarks.create(post);
    res.json(post);
});

module.exports = router;
