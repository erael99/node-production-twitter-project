const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = require('../app');

app.use(
    session({
        secret: 'twitter',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 14, // vadited time session
        },
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://zen:az@cluster0.8vrua.mongodb.net/twitter',
            ttl: 60 * 60 * 24 * 14
        }),

    })
);