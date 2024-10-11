const { selectUser, selectPage, insertUser } = require("../models/users");

async function findPage(count, page) {
    const results = await selectPage(count, page);
    return results;
}

async function getLogin(user) {
    const result = await selectUser(user);

    const { id } = result;

    const new_result = {
        message: "Success",
        id,
    };

    return new_result;
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