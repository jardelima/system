const router = require("express").Router();
const Users = require("../models/Users.model");
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if(!email) {
        return res.status(422).json({ message: "O E-mail é obrigatório" });
    }

    if(!password) {
        return res.status(422).json({ message: "A senha é obrigatória" });
    }

    const user = await Users.findOne({ email: email });

    if(!user) {
        return res.status(404).json({message: "Usuário não encontrado"});
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword) {
        return res.status(422).json({message: "Senha incorreta"});
    }

    try {
        const userLogged = {
            email: user.email
        };

        return res.status(200).json({ message: "Login realizado com sucesso", userLogged });
    } catch (error) {
        return res.status(500).json({ error: error });     
    }
});

module.exports = router;