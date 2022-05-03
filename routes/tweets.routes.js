const router = require('express').Router();
const {tweetForm, tweetList, tweetAdd, tweetDeleted, tweetEdit, tweetUpdate} = require('../controllers/tweets.controller');

router.get('/new', tweetForm);
router.get('/', tweetList);
router.post('/new', tweetAdd);
router.get('/edit/:tweetId', tweetEdit);
router.post('/update/:tweetId', tweetUpdate);
router.delete('/:tweetId', tweetDeleted);

module.exports = router;