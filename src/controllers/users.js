const { getLogin, findPage, createNewUser } = require("../services/users");

async function getAllUsers(req, res) {
    const { page = 1 } = req.query;  // Define o valor padrão para 1 se page não estiver presente

    // Define o número de resultados por página
    const resultsPerPage = 5;

    // Calcula o deslocamento com base na página atual
    const offset = (page - 1) * resultsPerPage;

    const data = await findPage(resultsPerPage, offset);
    return res.status(200).json(data);
}

async function postLogin(req, res) {
    const user = req.body;

    const result = await getLogin(user);

    if (result) {
        return res.status(200).json(result);
    }
    return res.status(500).json({ "message": "NOO" });
};

async function PostNewUser(req, res) {
    const user = req.body;
    const result = await createNewUser(user);
    return res.status(200).json(result);
}

module.exports = {
    postLogin,
    getAllUsers,
    PostNewUser
};