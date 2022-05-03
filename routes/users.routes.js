const router = require('express').Router();
const { signupForm, signup, uploadImage } = require('../controllers/users.controller');

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', uploadImage);

module.exports = router;