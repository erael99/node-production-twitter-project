const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140, 'tweet trop long'],
    minlength: [1, 'tweet trop court'],
    required: [true, 'Valeur requise']
  },
  author: { type: schema.Types.ObjectId, ref:'users', required: true}
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;