const express = require('express');
const { postLogin } = require('../controllers/users');

const router = express.Router();

router.get('/');
router.post('/login', postLogin);

module.exports = router;