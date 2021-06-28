DROP DATABASE IF EXISTS programacion2;
CREATE DATABASE programacion2 CHARACTER SET utf8mb4;

USE programacion2;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) ,
    apellido VARCHAR(20) ,
    mail VARCHAR(100) ,
    fecha DATE ,
    telefono INT,
    contraseña VARCHAR(80) ,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user VARCHAR(20) ,
    avatar VARCHAR(200) 
);


CREATE TABLE productos (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
image VARCHAR(200) ,
nombre VARCHAR(50) ,
temporada VARCHAR(20) ,
descripcion VARCHAR (500) ,
lanzamiento  DATE ,
usuario_id INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT usuario_producto_fk FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);


CREATE TABLE comentarios (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
usuario_id INT UNSIGNED,
producto_id INT UNSIGNED,
comentario VARCHAR(500),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios (id,nombre,apellido,mail,fecha,telefono,contraseña, user, avatar)VALUES (default, "Daira", "Sapir", "dairasapir@gmail.com", "2001-11-20", "1123667492", "Daira2","dairi" ,"foto 1.jpeg");
INSERT INTO usuarios (id,nombre,apellido,mail,fecha,telefono,contraseña, user, avatar) VALUES (default, "Clara", "Bur" , "clarabur@gmail.com" , "2001/05/10", "1540291928",  "Clara1","clarita" , "foto 1.jpeg");
INSERT INTO usuarios (id,nombre,apellido,mail,fecha,telefono,contraseña, user,  avatar)VALUES (default, "Cala", "Ruggeri", "calaruggeri@gmail.com", "2001/12/26", "1146897903", "CalaRugg" , "cala123" , "foto 1.jpeg");
INSERT INTO usuarios (id,nombre,apellido,mail,fecha,telefono,contraseña, user ,avatar)VALUES (default, "Agostina", "Cervio", "agoscervio@gmail.com" , "2002/03/17", "1144075773", "Agos2002","agos34" , "foto 1.jpeg");
INSERT INTO usuarios (id,nombre,apellido,mail,fecha,telefono,contraseña, user, avatar)VALUES (default, "Lola", "Torres", "lolatorres@gmail.com", "2003/06/18", "114686777", "LolaTorres", "lolita2" ,"foto 1.jpeg");

INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/bazer.jpeg", "Blazer negro", "Otoño 21", "Blazer negro de algodon y corte sastre confeccionado en tejido semi elastizado que aporta excelente calce y comodidad a la prenda. Forrería de mangas de satén opaco con un bajo porcentaje de elastano para acompañar el movimiento del cuerpo y el tejido exterior de la prenda. Forrería de cuerpo con crepe de satén semi brilloso. Silueta entallada y largo por debajo de la cadera. Posee un pequeño bolsillo ojal del lado derecho y dos bolsillos ojales con tapa a los costados de la prenda.","2021-03-11" ,"1" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/nueva.webp", "Saco Largo", "Invierno 21", "Saco de invierno cuadrille con botones confeccionado en tejido paño, súper suave y abrigado. Está completamente forrado en satén con un leve porcentaje de elastano para acompañar el movimiento del cuerpo y el tejido exterior de la prenda. Posee detalles internos de vivos en satén brillante y espaldín en tela base con chapita con cadena y logo.", "2021-03-11", "2" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/jeanblanco.jpeg", "Jean offwhite", "Verano 21", "Jean wide leg tiro alto, tejido 100% algodon","2021-03-11", "5" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/remera1.webp", "Remera estampada", "Verano 21", "Remera negra con hombreras confeccionada en jersey pima, 100% algodón peruano, de excelente calidad. Escote semi redondo terminado con puño en tela base y hombreras cortas terminadas con costura india, un estilo de puntada diferencial. Diseño de estampa de Bambi, exclusiva de nuestra colección","2021-03-11", "3");
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/saco.webp", "Chaleco crop", "Verano 21", "Chaleco crop negro de ultima moda con botones. Tiene bolsillos ocultos en costuras laterales y está completamente forrado en satén con un leve porcentaje de elastano.","2021-03-11", "4" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/jean.jpeg", "Jean negro", "Invierno 21", "Jean negro básico de todos los tiempos. Modelo fit al cuerpo y tiro extra alto. 100% algodon.","2021-03-11", "1" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/vestido.jpeg", "Vestido negro", "Otoño 21", "Vestido confeccionado en género crepe de satén opaco. Escote en embolsado con forrería de gasa, súper liviana y suave. Mangas largas con terminación de volado en tela combinación de gasa al tono.","2021-03-11", "4" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/vestido2.jpeg", "Vestido rosa", "Verano 21", "Vestido de saten rosa largo con espalda totalmente descubierta. Tiene dos tiritas finas que se atan en la espalda y un tajo sobre la pierna derecha.","2021-03-11", "2" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/blazer rosa.jpeg", "Blazer rosa", "Verano 21", "Blazer rosa de algodon y corte sastre confeccionado en tejido semi elastizado que aporta excelente calce y comodidad a la prenda. Forrería de mangas de satén opaco con un bajo porcentaje de elastano para acompañar el movimiento del cuerpo y el tejido exterior de la prenda. Forrería de cuerpo con crepe de satén semi brilloso. Silueta entallada y largo por debajo de la cadera. Posee un pequeño bolsillo ojal del lado derecho y dos bolsillos ojales con tapa a los costados de la prenda","2021-03-11", "1");
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/camisa azul.webp", "Camisa azul", "Verano 21", "Camisa De Corte Clásico, confeccionada en un material tipo Seda que vuelve a los guardarropas este año con una mezcla de texturas.","2021-03-11", "5" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/blanco.webp", "Campera de jean blanca", "Otoño 21", "Campera denim blanca, 100% algodón.","2021-03-11", "2" );
INSERT INTO productos (id, image, nombre, temporada, descripcion, lanzamiento, usuario_id) VALUES (default, "/images/products/zara.webp", "Campera de jean clasica", "Otoño 21", "Campera denim, 100% algodón.", "2021-03-11","3");

INSERT INTO comentarios VALUES (default, 1, 1, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 1, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 3, 1, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 4, 1, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 1, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 2, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 2, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 2, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 2, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 2, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 1, 2, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );


INSERT INTO comentarios VALUES (default, 1, 3, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 3, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 3, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 3, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 3, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 4, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 4, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 4, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 4, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 4, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 5, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 5, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 5, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 5, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 5, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 6, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 6, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 6, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 6, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 6, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 7, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 7, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 7, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 7, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 7, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 8, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 8, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 8, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 8, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 8, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 9, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 9, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 9, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 9, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 9, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 10, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 10, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 10, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 10, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 10, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 11, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 11, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 11, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 11, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 11, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );

INSERT INTO comentarios VALUES (default, 1, 12, "Excenlente calidad!", '2016-07-04 03:00:00','2016-07-04 03:00:00');
INSERT INTO comentarios VALUES (default, 2, 12, "Me encanto el producto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 3, 12, "Prenda de muy buena calidad, muy suave al tacto", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 4, 12, "No lo recomiendo, parecía mas lindo de lo que es", '2016-07-04 03:00:00','2016-07-04 03:00:00' );
INSERT INTO comentarios VALUES (default, 5, 12, "Excenlente producto!", '2016-07-04 03:00:00','2016-07-04 03:00:00' );



