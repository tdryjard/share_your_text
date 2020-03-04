DROP database IF EXISTS share_your_rap;

CREATE database share_your_rap;

USE share_your_rap;

CREATE TABLE texte (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL,
    title VARCHAR(60) NOT NULL,
    content VARCHAR(3500) NOT NULL,
    email VARCHAR(150) NULL,
    phone VARCHAR(20) NULL,
    rate INT NULL
)

CREATE TABLE studio (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    address VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NULL,
    email VARCHAR(150) NULL,
    price FLOAT NOT NULL
)