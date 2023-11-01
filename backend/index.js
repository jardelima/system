// DOTENV
require("dotenv").config();

// EXPRESS
const express = require("express");
const app = express();
const cors = require("cors");

// MONGODB
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.SERVER_USER}:${encodeURIComponent(process.env.SERVER_PASSWORD)}@cluster0.l0blbjy.mongodb.net/?retryWrites=true&w=majority`;

// ATIVANDO CORS
app.use(cors());

// PARA ACEITAR ANINHAMENTO DE OBJETOS 
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// ACEITAR SOMENTE JSON
app.use(express.json());

// ROTAS API
const registerUsers = require("./routes/registerUsers");
const loginUsers = require("./routes/loginUsers");
const authUsers = require("./routes/authUsers");

app.use("/register", registerUsers);
app.use("/login", loginUsers);
app.use("/auth/:id", authUsers);

// 
app.get("/", (req, res) => {
    res.status(200).json({ message: "Connected!" });
});

mongoose
    .connect(
        uri
    )
    .then(() => {
        app.listen(process.env.PORT);
    })
    .catch((error) => console.log(error));