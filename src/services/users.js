const { selectUser, selectPage, insertUser } = require("../models/users");

async function findPage(count, page) {
    const results = await selectPage(count, page);
    return results;
}

async function getLogin(user) {
    const result = selectUser(user);
    return result;
};

async function createNewUser(user) {
    const result = insertUser(user);
    return result;
}

module.exports = {
    getLogin,
    findPage,
    createNewUser
};