create database JogoIndie;
use JogoIndie;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    dtNasc date
);

create table save (
	idSave int,
    fkUsuario int,
    location varchar(45),
    porcentagem int,
    tempo time,
    geo int,
    primary key (idSave, fkUsuario),
    constraint fkUsuarioSave foreign key (fkUsuario) references usuario(idUsuario)
);

create table question (
	idQuestion int primary key auto_increment,
    doubt varchar(100)
);

create table answer (
	idAnswer int,
    result varchar(100),
    fkQuestion int,
    primary key(idAnswer, fkQuestion),
    constraint fkQuestionAnswer foreign key (fkQuestion) references question(idQuestion)
);

create table questionary (
	idQuestionary int auto_increment,
    fkUsuario int,
    fkQuestion int,
    respostaQuestion varchar(50),
    primary key(idQuestionary, fkUsuario, fkQuestion),
    constraint fkUsuarioQuestionary foreign key (fkUsuario) references usuario(idUsuario),
    constraint fkQuestionQuestionary foreign key (fkQuestion) references question(idQuestion)
);

alter table usuario add constraint chkSenha check (char_length(senha) >= 8);
alter table usuario add constraint chkEmail check (email like '%@%');

insert into usuario (nome, email, senha) values ('Teste', 'teste@teste.com', 'teste123');

insert into question (doubt) values 
	('Em qual plataforma você mais jogou?'),
    ('Qual estilo você mais gosta de jogar?'),
    ('Quantas horas por dia você joga?'),
    ('Qual seu jogo favorito?'),
    ('Em que idade você começou a jogar?');
    
    update question set doubt = 'Selecione um jogo que você mais se identifique:' where idQuestion = 4;
    update question set doubt = 'Em qual período da vida você teve o seu primeiro contato com jogos?' where idQuestion = 5;
    
truncate answer;
drop table questionary;

insert into answer (idAnswer, result, fkQuestion) values 
	(1, 'Console', 1),
    (2, 'PC', 1),
    (3, 'Celular', 1),
    (1, 'Ação', 2),
    (2, 'Aventura', 2),
    (3, 'Exploração', 2),
    (4, 'Raciocínio', 2),
    (1, '-Menos de 1h', 3),
    (2, 'Entre 1h e 2h', 3),
    (3, 'Mais de 3h', 3),
    (4, 'Mais de 4h', 3),
    (1, 'Hollow Knight', 4),
    (2, 'The Last of Us', 4),
    (3, 'Zelda', 4),
    (4, 'God od War', 4),
    (5, 'Sonic', 4),
    (6, 'Mario', 4),
    (7, 'Dark Souls', 4),
    (1, 'Comecei desde que nasci', 5),
    (2, 'Entre 5 e 10 anos', 5),
    (3, 'Depois dos 10 anos', 5),
    (4, 'Depois dos 15 anos', 5);
    
insert into questionary (fkAnswer, fkUsuario) values 
	('Em qual plataforma você mais jogou?'),
    ('Qual estilo você mais gosta de jogar?'),
    ('Quantas horas por dia você joga?'),
    ('Qual seu jogo favorito?'),
    ('Em que idade você começou a jogar?');

select * from usuario where email = 'teste@teste.com' and senha = 'teste123';

select * from usuario;

select * from save;

select * from question;

select idQuestion, doubt, an.result as respostas
from question que
join answer an on fkQuestion = idQuestion;

select * from answer order by fkQuestion;
alter table answer add column grupoAnswer varchar(45);
update answer set grupoAnswer = 'tempoComecou' where idAnswer in(1,2,3,4) and fkQuestion = 5;

select * from questionary;

select count(fkUsuario) from questionary where respostaQuestion = 'Console';

select * from questionary where fkUsuario = 1 and fkQuestion = 1;

truncate questionary;

select count(*) from usuario join save on fkUsuario = idUsuario where save.porcentagem = 100;

update save set geo = 500 where idSave = 2 and fkUsuario = 1;

select sum(geo) TotalGeo from save where fkUsuario = 1;

select count(*) QuantidadeJogos 
from usuario usu 
join save sa on fkUsuario = idUsuario where sa.porcentagem = 100 and usu.idUsuario = 3;



select count(*) from usuario where timestampdiff(year, dtNasc, now()) < 18;

select timestampdiff(year, dtNasc, now()) idade from usuario;

delete from save where idSave = 1;

drop table save;

drop table usuario;