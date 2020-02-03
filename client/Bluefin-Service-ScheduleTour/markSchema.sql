DROP DATABASE if exists scheduleTours;

CREATE DATABASE scheduleTours;

USE scheduleTours;

CREATE TABLE agents (
  id INT(11) primary key auto_increment,
  name VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE listings (
  id INT(11) primary key,
  listing_price INT(11),
  agent_id INT(11),
  FOREIGN KEY (agent_id)
      REFERENCES agents(id)
);

CREATE TABLE users (
  id INT(11) primary key auto_increment,
  name VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE chats (
  id INT(11) primary key auto_increment,
  message VARCHAR(255),
  user_id INT(11),
  agent_id INT(11),
  FOREIGN KEY (user_id)
      REFERENCES users(id),
  FOREIGN KEY (agent_id)
      REFERENCES agents(id)
);