CREATE burger_db;
USE burger_db;


CREATE TABLE 'burgers' (
    id INT (11) AUTO_INCREMENT NOT NULL,
 burger VARCHAR (255) NOT NULL,
 isDevoured BIT NOT NULL, 
    PRIMARY KEY (id)
)
INSERT INTO burger_db(burgerName, IsDevoured)
