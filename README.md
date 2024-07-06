create database soldi_db;
use soldi_db;

create table usuarios(
	id int not null auto_increment primary key,
    nome varchar(255) not null,
    sobrenome varchar(255) not null,
    nascimento date,
    email varchar(255) unique not null,
    senha int not null,
    perfil varchar(255) not null,
    foto varchar(255),
    nivel int default 1,
    sequencia_dias int default 0,
    pontos int default 0,
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp
);
