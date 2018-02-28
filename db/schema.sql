DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
    id INT (11) AUTO_INCREMENT NOT NULL,
 burgerName VARCHAR (255) NOT NULL,
 isDevoured BIT NOT NULL, 
    PRIMARY KEY (id)
)

