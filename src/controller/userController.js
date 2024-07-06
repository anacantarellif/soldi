const connection = require('../config/db'); //configuração de acesso ao banco
// const dotenv = require('dotenv').config();

async function storeUser(request, response){
    //recuperar dados do forms
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.senha
    );

    //comando no banco para colocar as informações do formulário para o banco
    const query = "INSERT INTO usuarios(name, email, senha) VALUES(?,?,?)";

    //testando o banco
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'Sucesso!',
                    data: results
                })
        }else{
            response
                .status(400)
                .json({
                    success: false,
                    message: 'Sem sucesso!',
                    data: err
                })
        }
    })
}