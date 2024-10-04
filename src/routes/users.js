const express = require('express');
const { postLogin, getAllUsers, PostNewUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', PostNewUser);
router.post('/login', postLogin);

module.exports = router;