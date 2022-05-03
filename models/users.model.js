const User = require('../database/models/user.model');

exports.createUser = async (user) => {
    try{
        const hashPassword = await User.hashPassword(user.password);
        const newuser = new User ({
            username : user.username,
            local: {
                email: user.email,
                password: hashPassword
            }
        });
        return newuser.save();
    } catch(e) {
        throw e;
    }
};

exports.findUserPerEmail = (email) => {
    return User.findOne({'localemail': email}).exec();
};

exports.findUserPerID = (id) => {
    return User.findById(id).exec();
};
