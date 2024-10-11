const express = require('express');
const router = express.Router();
const { Bookmarks } = require('../models');

router.get('/', async (req, res) => {
	try {
		const bookmarks = await Bookmarks.findAll();
		res.json(bookmarks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error retrieving bookmarks' });
	}
});

router.post('/', async (req, res) => {
	const post = req.body;
	await Bookmarks.create(post);
	res.json(post);
});

module.exports = router;
