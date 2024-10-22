const express = require('express');
const { postLogin, getAllUsers, PostNewUser } = require('../controllers/users');
const connection = require('../models/connection');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', PostNewUser);
router.post('/login', postLogin);
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, address, phone } = req.body;

    const result = await connection.execute(
        'UPDATE users SET name = ?, address = ?, phone = ? WHERE id = ?',
        [name, address, phone, id]
    );
    return res.json(result);
});

module.exports = router;