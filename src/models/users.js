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

        if (!result) {
            return 1
        }

        // Comparar a senha fornecida com a senha armazenada
        if (password !== result.password) {
            return 2
        }

        return result
    } catch (error) {
        console.error(error);
        return error
    }
};

async function insertUser(user) {
    const { name, email, password } = user;
    const [{ insertId }] = await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return insertId;
}

module.exports = {
    selectUser,
    selectPage,
    insertUser
};