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

    let params = []
    console.log(params)
    if (request.body.Nivel_atual>=request.body.Nivel_user){
        params = Array(
                nivel = Number(request.body.Nivel_user) + 1,
                pontos = Number(request.body.Pontos_user) + 10,
                Number(request.body.Id_user)  
            );
    }else{
        params = Array(
            nivel = Number(request.body.Nivel_user),
            pontos = Number(request.body.Pontos_user) + 10,
            Number(request.body.Id_user)  
        );
    }

    // //comando no banco para colocar as informações do formulário para o banco
    const query = "UPDATE usuarios set nivel = ?, pontos = ? where id = ?";


    //testando o banco
    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'Pontos recuperados com sucesso!',
                    data: results
                })
        }else{
            response
                .status(400)
                .json({
                    success: false,
                    message: 'Erro ao recuperar pontos.',
                    data: err
                })
        }
    })
}

async function getDados(req, res) {
    
    const params = Array(
        req.body.id
    )

    const query = "SELECT nivel, pontos FROM usuarios WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if (results.length > 0) {
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "Pegou nivel e pontos",
                        data: results[0]
                    })
            } else {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Deu errado",
                    })
            }
        }) 
}

async function getDadosUser(req, res) {
    
    const params = Array(
        req.params.id
    )

    const query = "SELECT * FROM usuarios WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if (results.length > 0) {
                res
                    .status(200)
                    .json({
                        success: true,
                        message: "Pegou dados do user",
                        data: results[0]
                    })
            } else {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Deu errado",
                    })
            }
        }) 
}

async function getRanking(req, res) {
    const query = 'SELECT id, nome, pontos FROM usuarios ORDER BY pontos DESC';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar ranking:', err);
            return res.status(500).json({
                success: false,
                message: 'Erro ao recuperar o ranking.',
                data: err
            });
        }

        res.status(200).json({
            success: true,
            message: 'Ranking recuperado com sucesso.',
            data: results
        });
    });
}

module.exports = {
    storeID,
    storeUser,
    getDados,
    getDadosUser,
    getRanking 
};
