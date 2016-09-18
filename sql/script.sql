create database maracabarro;
use maracabarro;

/*
 * Usuario
 */
create table usuario (
  id int(8) primary key auto_increment,
  nome varchar(50),
  email varchar(50),
  senha varchar(50),
  token varchar(32),
  dataAniversario date,
  ativo char(1)
);
insert into usuario values (0,'admin','admin@admin.com.br','senha','token','S');

/*
 * Configurações
 */
create table app (
  id int(8) primary key auto_increment,
  nomeApp varchar(50),
  textoRodape varchar(500),
);

/*
 * Participante
 */
create table participante (
    id int(8) primary key auto_increment,
    id_usuario int(8),
    id_cuca int(8),
    pago char(1)
);
