-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(255),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
