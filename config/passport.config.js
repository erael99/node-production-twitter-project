const app = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { findUserPerEmail, findUserPerID } = require('../models/users.model');


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => { //save suser _id
    done(null, user._id);
});

passport.deserializeUser( async (id, done) => { //save user by _id
    try{
        const user = await findUserPerID(id);
        done(null, user);
    } catch(e){
        done(e, null)
    }
});

passport.use('local', new LocalStrategy(
    {usernameField: 'email'}, 
    async (email, password, done) => {
        try{
            const user = await findUserPerEmail(email);
            if(user){
                const match = user.comparedPassword(password);
                if(match){
                    done(null, user);
                }else {
                    done(null, false, {message: 'password failed please try again'});
                }
            } else{
                done(null, false, {message : 'user not found'});
            }
        } catch(e) {
            done(e);
        }
    }
))

