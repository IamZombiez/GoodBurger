CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
ID int auto_increment NOT NULL,
burger_name VARCHAR(100) NOT NULL,
eaten BOOLEAN default false,
PRIMARY KEY (ID)
);