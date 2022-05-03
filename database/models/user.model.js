const mongoose  = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new schema({
    username: {type: String},
    local :{
        email: { type: String, required: true , unique: true},
        password: { type: String, required: true }
    },
    avatar : {type: String, default: '/images/profil-avatar.png'}
});

userSchema.statics.hashPassword =  (password) =>{
    return bcrypt.hash(password, 12);
};

userSchema.methods.comparedPassword = function(password){
    return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('users', userSchema);

module.exports = User;
