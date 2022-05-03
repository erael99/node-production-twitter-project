const createError = require('http-errors');
const{ getList , createTweet, tweetDeleted, getTweet, updateTweet } = require('../models/tweets.model');

exports.tweetForm = async (req, res, next) => {
    try{
        res.render('tweets/tweet-form', {
            tweet: {}, 
            isAuthenticated: req.isAuthenticated(), 
            currentUser: req.user 
        });
    }catch(e){
        next(e);
    }
};

exports.tweetList =async (req, res, next) => {
    try{
        const tweets = await getList();
        res.render('tweets/tweet', {
            tweets, 
            isAuthenticated: req.isAuthenticated(), 
            currentUser: req.user 
        });
    }catch(e){
        next(e);
    }
};

exports.tweetAdd = async (req, res, next) => {
    try {
        const body = req.body;
        await createTweet({ ...body, author: req.user._id });
        res.redirect('/tweets');
      } catch(e) {
        const errors = Object.keys(e.errors).map( key => e.errors[key].message );
        res.status(400).render('tweets/tweet-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
      }
};


exports.tweetDeleted = async (req, res, next) =>{
    try{
        const deleteId = req.body.tweetId;
        await tweetDeleted(deleteId);
        const tweets =  await getList();
        res.render('tweets/tweet-list', { 
            tweets, 
            isAuthenticated: req.isAuthenticated(), 
            currentUser: req.user 
         });
    } catch(e){
        next(e);
    }
};

exports.tweetEdit = async (req, res, next) =>{
    try{
        const tweetId = req.params.tweetId;
        const tweet = await getTweet(tweetId);
        res.render('tweets/tweet-form', {
            tweet, 
            isAuthenticated: req.isAuthenticated(), 
            currentUser: req.user 
        });
    }catch(e){
        next(e);
    }
};

exports.tweetUpdate = async (req, res, next) => {
    const tweetId = req.params.tweetId;
    try {
      const body = req.body;
      await updateTweet(tweetId, body);
      res.redirect('/tweets');
    } catch(e) {
      next(e);
    }
};


