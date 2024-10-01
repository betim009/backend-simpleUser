const { selectUser } = require("../models/users");

async function getLogin(user) {
    const result = selectUser(user);
    return result;
};

module.exports = {
    getLogin
};