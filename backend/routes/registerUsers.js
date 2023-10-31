const router = require("express").Router();
const Users = require("../models/Users.model");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { name, lastName, email, password } = req.body;

    if(!name) {
        res.status(422).json({ message: "O nome é obrigatório" });
        return;
    }

    if(!lastName) {
        res.status(422).json({ message: "O sobrenome é obrigatório" });
        return;
    }

    if(!email) {
        res.status(422).json({ message: "O e-mail é obrigatório" });
        return;
    }

    if(!password) {
        res.status(422).json({ message: "A senha é obrigatória" });
        return;
    }

    const userExists = await Users.findOne({ email: email });

    if(userExists) {
        res.status(422).json({message: "E-mail já cadastrado"});
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = {
        name, 
        lastName,
        email,
        password: passwordHash
    }

    try {
        await Users.create(user);

        res.status(201).json({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;