const Tweet = require("../database/models/tweet.model");

exports.getList = () => {
    return Tweet.find({}).exec();
};

exports.createTweet = (tweet) =>{
    const newTweet = new Tweet (tweet);
    return newTweet.save();
};

exports.tweetDeleted = (deleteId) => {
    return Tweet.findOneAndDelete(deleteId).exec();
};

exports.getTweet = (tweetId) => {
    return Tweet.findOne({_id : tweetId}).exec();
};

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
};