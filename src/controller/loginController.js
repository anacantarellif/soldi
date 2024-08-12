
const { response } = require('express');
const db = require('../config/db');

async function login(req, res) {
    console.log("ola")
    const params = Array(
        req.body.email
    )
    console.log("email", req.body.email)

    const query = "SELECT email, senha FROM usuarios WHERE email = ?;";

    db.query(query, params, (err, results) => {
        console.log(err, results)
        if (results.length > 0) {
            let senhaFormulario = req.body.senha;
            let senhaBanco = results[0].senha;
            console.log(senhaFormulario, senhaBanco)
            if (Number(senhaBanco) === Number(senhaFormulario)) {
                console.log("senha certa'")
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "Login com sucesso",
                        data: results[0]
                    })
            } else {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Verifique sua senha",
                    })
            }
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Email não cadastrado"
                })
        }
    })
};

module.exports = {
    login
}
