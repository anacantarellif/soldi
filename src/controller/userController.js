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

async function storeConteudo(request, response){
    console.log("aqui")

    //recuperar dados do forms
    const params = Array(
        request.body.titulo,
        request.body.imagem,
        request.body.texto
    );
        console.log("aqui")
    //comando no banco para colocar as informações do formulário para o banco
    const query = "INSERT INTO conteudos(titulo, imagem, texto) VALUES(?,?,?)";

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

async function updateUser(request, response) {
    const { nome, sobrenome, nascimento, celular, email, senha } = request.body;
    const userId = request.params.id;

    const query = "UPDATE usuarios SET nome = ?, sobrenome = ?, nascimento = ?, celular = ?, email = ?, senha = ? WHERE id = ?";
    const params = [nome, sobrenome, nascimento, celular, email, senha, userId];

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error('Erro ao atualizar usuário:', err);
            return response.status(500).json({ success: false, message: "Erro ao atualizar os dados.", data: err });
        }

        response.status(200).json({ success: true, message: "Dados atualizados com sucesso!", data: results });
    });
}

async function getDataUser(req, res) {

    const params = Array(
        req.body.id
    )

    const query = 'SELECT DATE(created_at) FROM usuarios WHERE id = ?';

    console.log(query)

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar data de criação:', err);
            return res.status(500).json({
                success: false,
                message: 'Erro ao recuperar a data de criação.',
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
    storeConteudo,
    getDados,
    getDadosUser,
    updateUser,
    getDataUser,
    getRanking 
};
