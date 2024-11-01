create database soldi_db;
use soldi_db;

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `nascimento` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `perfil` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `nivel` int DEFAULT '1',
  `sequencia_dias` int DEFAULT '0',
  `pontos` int DEFAULT '0',
  `created_at` datetime default current_timestamp,
  `update_at` timestamp default current_timestamp,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

SELECT DATE(created_at) FROM usuarios WHERE id = 1;

drop table usuarios;

select * from usuarios;


create database soldi_db;
 use soldi_db;

create table usuarios( 
id int primary key auto_increment, 
nome varchar(255), 
sobrenome varchar(255), 
nascimento date, 
celular int null,
email varchar(255) unique not null, 
senha int not null, 
perfil varchar(255) null, 
foto varchar(255), 
nivel int default 1, 
sequencia_dias int default 0, 
pontos int default 0,
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table conteudos(
	id int primary key auto_increment,
    titulo varchar(255) null, 
    imagem varchar(255) default null,
    texto varchar(1000) null
);

select * from usuarios;
select * from conteudos;




drop table usuarios;
drop table conteudos;






