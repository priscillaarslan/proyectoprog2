CREATE SCHEMA redSocial;
USE redSocial;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) NOT NULL UNIQUE, 
foto VARCHAR(255) NOT NULL, 
password VARCHAR (255) NOT NULL,
fecha de nacimiento DATE NOT NULL, 
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
FOREIGN KEY (fkUserId) REFERENCES usuarios (Id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
texto VARCHAR(255) NOT NULL,


createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deleatedAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FkUserId INT UNSIGNED,
FOREIGN KEY (fkUserId) REFERENCES usuarios (Id),

 fkPostId INT UNSIGNED,
FOREIGN KEY () REFERENCES posteos (Id)

);      

INSERT INTO usuarios (email,foto, password,nacimiento,dni)
VALUES ('parslan@udesa.edu.ar', 'https://bangbranding.com/blog/wp-content/uploads/2016/09/700x511_SliderInterior.jpg', '1234','2002-12-10',123456789);

INSERT INTO usuarios (email,foto, password,nacimiento,dni)
VALUES ('Martinamendez@udesa.edu.ar', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWFAI89g3oAAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=', '3333','2005-2-02',33876548);

INSERT INTO usuarios (email,foto, password,nacimiento,dni)
VALUES ('mdaireaux@hotmail.edu.ar', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAA1BMVEWr4fsfXWZiAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC', '4444','2002-1-03',42579049);

INSERT INTO usuarios (email,foto, password,nacimiento,dni)
VALUES ('mail@gmail.edu.ar', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkGBQoFBgUFBQ8ICRAKFBEWFhQRExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRk3LS43Nzc3Ky03LSs3KysrKy0tKystKystKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKsBJgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAWAQEBAQAAAAAAAAAAAAAAAAAABgT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCrASrCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=', '5555','1999-5-05',23376555);

INSERT INTO usuarios (email,foto, password,nacimiento,dni)
VALUES ('usuario342@gmail.edu.ar', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/mQC5YThkAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC', '6666','2003-12-12',22246548);




INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://st1.uvnimg.com/dims4/default/4f90522/2147483647/thumbnail/1240x698/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fimj%2Fotramedicina%2FB%2FBeneficios-de-andar-en-bicicleta-1.jpg','Hermoso dia para andar en bici ',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://www.parati.com.ar/wp-content/uploads/2022/08/11-de-agosto-D%C3%ADa-del-Nutricionista-DESTACADA-749x561.jpg.webp','Arrancanco el dia de una manera saludable',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://www.saludalia.com/Uploads/saludalia.com/ImagenesGrandes/el-impacto-de-un-estilo-de-vida-saludable.jpg','Alimentacion consiente',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://www.clinicabiblica.com/images/noticias2022/consejos0422.jpg','	Dia soleado acompañado de actividades al aire libre',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPr7huCbf59wWWvI1AXP24N7iRodl7Roff_Ka5vd06WH8sE1c5pFErpt_fXRFnWgj6vY4&usqp=CAU','Haciendo yoga',1,);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://concepto.de/wp-content/uploads/2015/08/familia-extensa-e1591818025158-800x400.jpg','Domingo en familia',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://www.florespedia.com/Imagenes/flores-bonitas.jpg','#Flores de colores',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://mundoentrenamiento.com/wp-content/uploads/2018/08/pilates.jpg','#pilates',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://via.placeholder.com/260x260','texto para el posteo',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/MOLWAU2YXFCILOHQVJNAKZ5RWA','Paseo en rollers',1);

INSERT INTO posteos (foto,texto,FkUserId,)
VALUES ('https://blog.argos.cl/wp-content/uploads/2016/11/Diseño-sin-t%C3%ADtulo.jpg','Dia de asado',1);





INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('quiero ser asi', '1','3' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('tremendo!!!', '1','2' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('increible', '1','4' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('wowwww', '1','5' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('que envidia', '1','6' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('tremenda foto', '1','7' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('quien pudiera!', '1','2' );

INSERT INTO comentarios (texto,FkUserId,Fkpostid)
VALUES ('que buena foto!!', '1','1' );




/* El unsigned hace que no nos permite utilizar numeros no negativos. SQL esta 
hecho para que las cosas sean escalables y cuando manejamos mucha informacion 
que un campo con una columna ocupe mas o menos beats puede hacer una diferencia.
El unsigned hace que ese beat que queda suelto, el unsidned lo utiliza como otro 
numero para que no sea negativo*/