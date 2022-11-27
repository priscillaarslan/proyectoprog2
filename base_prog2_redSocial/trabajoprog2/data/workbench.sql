CREATE SCHEMA redSocial;
USE redSocial;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) NOT NULL UNIQUE, 
foto VARCHAR(255) NOT NULL, 
password VARCHAR (255) NOT NULL,
fechaDeNacimiento DATE NOT NULL, 
DNI VARCHAR(9) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posteos (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
foto VARCHAR(255) NOT NULL,
texto VARCHAR(255) NOT NULL,   
usuario_id INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)  ON DELETE CASCADE
);


CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
texto VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_id INT UNSIGNED,
FOREIGN KEY (usuario_id) REFERENCES usuarios (id)  ON DELETE CASCADE,
posteo_id INT UNSIGNED,
FOREIGN KEY (posteo_id) REFERENCES posteos (id)  ON DELETE CASCADE

);  

create table seguidores(
  id int unsigned primary key auto_increment,
  seguido_id int unsigned not null,
  seguidor_id int unsigned not null,
  FOREIGN KEY (seguido_id) references usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (seguidor_id) references usuarios(id) ON DELETE CASCADE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO usuarios (id, email, username, foto, password, fechaDeNacimiento,DNI)
VALUES (default, 'parslan@udesa.edu.ar', 'KylieJenner',  '1.jpeg', '1234','2002-12-10',12345678);

INSERT INTO usuarios (id, email, username, foto, password, fechaDeNacimiento,DNI)
VALUES (default, 'martina@udesa.edu.ar', 'KendallJenner',  '2.jpeg', '1234','2002-12-10',12345678);

INSERT INTO usuarios (id, email, username, foto, password, fechaDeNacimiento,DNI)
VALUES (default, 'francisco@udesa.edu.ar', 'KrisJenner',  '3.jpeg', '1234','2002-12-10',12345678);

INSERT INTO usuarios (id, email, username, foto, password, fechaDeNacimiento,DNI)
VALUES (default, 'josefina@udesa.edu.ar', 'KimKardashian',  '4.jpeg', '1234','2002-12-10',12345678);

INSERT INTO usuarios (id, email, username, foto, password, fechaDeNacimiento,DNI)
VALUES (default, 'tomar@udesa.edu.ar', 'TravisScott',  '4.jpeg', '1234','2002-12-10',12345678);


INSERT INTO posteos (id,foto,texto, usuario_id)
VALUES 
(default, '1.jpeg', 'Hola soy kim', '1'), 
(default, '2.jpeg', 'Hola', '1'),
(default, '3.jpeg', 'te quiero', '1'),
(default, '4.jpeg', 'te extraño', '1'),
(default, '5.jpeg', 'chau', '1'),
(default, '6.jpeg', 'hola', '1'),
(default, '7.jpeg', 'que linda', '1'),
(default, '8.jpeg', 'Hola soy kim', '1'),
(default, '9.jpeg', 'Hola soy re linda', '1'),
(default, '10.jpeg', 'Hola soy kim', '1');


INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('Hola soy kim', default, '1', '1');

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('los extasño!!!', default, '1', '1' );

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('increible!!!', default, '1', '1' );

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('muy lindo !!!', default, '1', '1');

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('tremendo!!!', default, '1', '1');

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('muy bella', default, '1', '1' );

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('los quiero', default, '1', '1' );

INSERT INTO comentarios (texto, id, usuario_id, posteo_id)
VALUES ('muy bien', default, '1', '1');


