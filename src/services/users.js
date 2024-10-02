const { selectUser, selectPage } = require("../models/users");

async function findPage(count, page) {
    const results = await selectPage(count, page);
    return results;
}

async function getLogin(user) {
    const result = selectUser(user);
    return result;
};

module.exports = {
    getLogin,
    findPage
};