const express = require('express');
const { postLogin, getAllUsers } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/login', postLogin);

module.exports = router;