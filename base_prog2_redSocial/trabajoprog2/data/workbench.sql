CREATE SCHEMA redSocial;
USE redSocial;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) NOT NULL UNIQUE, 
foto VARCHAR(255) NOT NULL, 
password VARCHAR (255) NOT NULL,
nacimiento DATE NOT NULL, 
DNI INT(9) NOT NULL,
createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deleatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


);

CREATE TABLE posteos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
foto VARCHAR(255) NOT NULL,
texto VARCHAR(255) NOT NULL,


createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deleatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FkUserId INT UNSIGNED,
FOREIGN KEY (FkUserId) REFERENCES usuarios (Id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
texto VARCHAR(255) NOT NULL,


createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deleatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FkUserId INT UNSIGNED,
FOREIGN KEY (FkUserId) REFERENCES usuarios (Id),

FkPostId INT UNSIGNED,
FOREIGN KEY (FkPostId) REFERENCES posteos (Id)

);

INSERT INTO usuarios (email,foto, username,password,nacimiento,dni)
VALUES ('parslan@udesa.edu.ar', 'https://via.placeholder.com/101x99','martulinda', '1234','2002-11-05',123456789);

INSERT INTO posteos (foto,texto,FkUserId)
VALUES ('https://via.placeholder.com/260x260','texto para el posteo',1);

INSERT INTO posteos (foto,texto,FkUserId)
VALUES ('https://via.placeholder.com/260x260','texto para el posteo',1);

INSERT INTO comentarios (foto,texto,FkUserId)
VALUES ('https://via.placeholder.com/260x260','texto para el posteo',1);

/* El unsigned hace que no nos permite utilizar numeros no negativos. SQL esta 
hecho para que las cosas sean escalables y cuando manejamos mucha informacion 
que un campo con una columna ocupe mas o menos beats puede hacer una diferencia.
El unsigned hace que ese beat que queda suelto, el unsidned lo utiliza como otro 
numero para que no sea negativo*/