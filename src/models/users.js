const connection = require("./connection");

async function selectUser(user) {
    const { email, password } = user;
    try {
        const [[result]] = await connection.execute(
            'SELECT * FROM users WHERE email = ?', [email]
        );

        // Comparar a senha fornecida com a senha armazenada
        if (password !== result.password_hash) {
            return false;
        }

        return result
    } catch (error) {
        console.error(error);
        return error
    }
};

module.exports = {
    selectUser
};