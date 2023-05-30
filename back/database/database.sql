DROP DATABASE IF EXISTS simplon_jo;

CREATE DATABASE simplon_jo;

USE simplon_jo;

CREATE TABLE
  Sport (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  );

CREATE TABLE
  Epreuve (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    Or_Id INT,
    Argent_Id INT,
    Bronze_Id INT,
    Sport_Id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (Sport_Id) REFERENCES Sport (id)
  );

CREATE TABLE
  Athlete (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  );