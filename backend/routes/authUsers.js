// DOTENV
require("dotenv").config();

const router = require("express").Router();
const Users = require("../models/Users.model");
const jwt = require("jsonwebtoken");

router.get("/", checkToken, async (req, res) => {
    const id = req.params.id;

    const user = await Users.findOne(id, "-password");

    if(!user) {
        return res.status(404).json({message: "Usuário não encontrado"});
    }

    try {
        return res.status(200).json({ message: "Usuário autenticado", user });
    } catch (error) {
        return res.status(500).json({ error: error });     
    }
});

function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Acesso negado" });
    }

    try {
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();
    } catch (error) {
        res.status(400).json({ message: "Token inválido" });
    }
}

module.exports = router;