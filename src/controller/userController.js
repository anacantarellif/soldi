const connection = require('../config/db'); //configuração de acesso ao banco
const dotenv = require('dotenv').config();

async function storeUser(request, response){
    console.log("aqui")

    //recuperar dados do forms
    const params = Array(
        request.body.nome,
        request.body.sobrenome,
        request.body.nascimento,
        request.body.celular,
        request.body.email,
        request.body.senha
    );
        console.log("aqui")
    //comando no banco para colocar as informações do formulário para o banco
    const query = "INSERT INTO usuarios(nome, sobrenome, nascimento, celular, email, senha) VALUES(?,?,?,?,?,?)";

    //testando o banco
    connection.query(query, params, (err, results) => {
        console.log(err, results)
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

async function storeID(request, response){
    console.log("aqui")

    //recuperar dados do forms
    const params = Array(
        nivel = Number(request.body.Nivel_user) + 1,
        pontos = Number(request.body.Pontos_user) + 10,
        Number(request.body.Id_user)  
      
    );
    console.log(params);
    //comando no banco para colocar as informações do formulário para o banco
    const query = "UPDATE usuarios set nivel = ?, pontos = ? where id = ?";

    // como atualizao duas coisas nivel e pontos???????????????????????????????????????

    //testando o banco
    connection.query(query, params, (err, results) => {
        console.log(err, results)
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



module.exports={
    storeUser,
    storeID
}