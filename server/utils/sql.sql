DROP DATABASE IF EXISTS simplon_jo;

CREATE DATABASE simplon_jo;

USE simplon_jo;

CREATE TABLE
  Sport (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    image VARCHAR(5000),
    PRIMARY KEY (id)
  );

CREATE TABLE
  Epreuve (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    Sport_Id INT UNSIGNED,
    PRIMARY KEY (id),
    FOREIGN KEY (Sport_Id) REFERENCES Sport (id)
  );

CREATE TABLE
  Athlete (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
  );

CREATE TABLE
  Medaille (
    id TINYINT (1) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(10) NOT NULL
  );

CREATE TABLE
  Titres (
    athlete_id INT UNSIGNED,
    epreuve_id INT UNSIGNED,
    medaille_id TINYINT (1) UNSIGNED,
    FOREIGN KEY (athlete_id) REFERENCES Athlete (id),
    FOREIGN KEY (epreuve_id) REFERENCES Epreuve (id),
    FOREIGN KEY (medaille_id) REFERENCES Medaille (id),
    PRIMARY KEY (athlete_id, epreuve_id, medaille_id)
  );
  
INSERT INTO Medaille (type) VALUES ('Or');
INSERT INTO Medaille (type) VALUES ('Argent');
INSERT INTO Medaille (type) VALUES ('Bronze');