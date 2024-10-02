const connection = require("./connection");

const selectPage = async (count, page) => {
    // Executa a consulta SQL com LIMIT e OFFSET
    const [result] = await connection.query(
        'SELECT * FROM users LIMIT ? OFFSET ?',
        [count, page]
    );
    return result;
};

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
    selectUser,
    selectPage
};