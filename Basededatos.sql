CREATE DATABASE programacion2 CHARACTER SET utf8mb4;

USE programacion2;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    fecha DATE NOT NULL,
    telefono INT
);

ALTER TABLE usuarios 
ADD fecha DATE NOT NULL;


CREATE TABLE productos (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
image VARCHAR(200) NOT NULL,
nombre VARCHAR(50) NOT NULL,
temporada VARCHAR(20) NOT NULL
);

CREATE TABLE usuario_producto (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
usuario_id INT UNSIGNED,
producto_id INT UNSIGNED,

CONSTRAINT usuario_producto_fk FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
CONSTRAINT producto_usuario_fk FOREIGN KEY (producto_id) REFERENCES productos(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
usuario_id INT,
producto_id INT,
comentario VARCHAR(500),
fecha DATE NOT NULL
);

CREATE TABLE usuario_comentarios (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
usuario_id INT UNSIGNED,
comentario_id INT UNSIGNED,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (comentario_id) REFERENCES comentarios(id)
);

CREATE TABLE producto_comentarios (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
producto_id INT UNSIGNED,
comentario_id INT UNSIGNED,

FOREIGN KEY (producto_id) REFERENCES productos(id),
FOREIGN KEY (comentario_id) REFERENCES comentarios(id)
);

INSERT INTO usuarios VALUES (default, "Daira", "Sapir", "dairasapir@gmail.com", "1123667492", "2001-11-20");
INSERT INTO usuarios VALUES (default, "Clara", "Bur" , "clarabur@gmail.com" , "1540291928", "2001/05/10" );
INSERT INTO usuarios VALUES (default, "Cala", "Ruggeri", "calaruggeri@gmail.com", "1146897903", "2001/12/26" );
INSERT INTO usuarios VALUES (default, "Agostina", "Cervio", "agoscervio@gmail.com" , "1144075773", "2002/03/17");
INSERT INTO usuarios VALUES (default, "Lola", "Torres", "lolatorres@gmail.com", "114686777", "2003/06/18");

INSERT INTO productos VALUES (default, "/images/products/bazer.jpeg", "Blazer negro", "Otoño 21" );
INSERT INTO productos VALUES (default, "/images/products/nueva.webp", "Saco Largo", "Invierno 21" );
INSERT INTO productos VALUES (default, "/images/products/jeanblanco.jpeg", "Jean Blanco", "Verano 21" );
INSERT INTO productos VALUES (default, "/images/products/remera1.webp", "Remera Clásica Blanca", "Verano 21" );
INSERT INTO productos VALUES (default, "/images/products/saco.webp", "Chaleco clasico", "Verano 21" );
INSERT INTO productos VALUES (default, "/images/products/jean.jpeg", "Jean negro", "Invierno 21" );
INSERT INTO productos VALUES (default, "/images/products/vestido.jpeg", "Vestido negro", "Otoño 21" );
INSERT INTO productos VALUES (default, "/images/products/vestido2.jpeg", "Vestido rosado", "Verano 21" );
INSERT INTO productos VALUES (default, "/images/products/jeanoversize.jpeg", "Jean Clasico oversize", "Verano 21" );
INSERT INTO productos VALUES (default, "/images/products/camperadejean.jpeg", "Campera de jean", "Verano 21" );

INSERT INTO comentarios VALUES (default, 1, 1, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 1, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 1, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 1, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 2, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 2, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 2, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 2, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 3, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 3, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 3, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 3, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 4, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 4, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 4, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 4, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 5, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 5, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 5, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 5, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 6, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 6, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 6, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 6, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 7, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 7, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 7, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 7, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 8, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 8, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 8, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 8, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 9, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 9, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 9, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 9, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );

INSERT INTO comentarios VALUES (default, 1, 10, "Excenlente calidad!", "2020-10-4" );
INSERT INTO comentarios VALUES (default, 2, 10, "Me encanto el producto", "2020-07-09" );
INSERT INTO comentarios VALUES (default, 3, 10, "Prenda de muy buena calidad, muy suave al tacto", "2021-01-12" );
INSERT INTO comentarios VALUES (default, 4, 10, "No lo recomiendo, parecía mas lindo de lo que es", "2021-03-15" );