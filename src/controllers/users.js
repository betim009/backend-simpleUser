const { getLogin } = require("../services/users");

async function postLogin(req, res) {
    const user = req.body;
    
    const result = await getLogin(user);

    if (result) {
        return res.status(200).json(result);
    }
    return res.status(500).json({"message": "NOO"});
};

module.exports = {
    postLogin
};