CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  date_created TIMESTAMP,
  last_login TIMESTAMP,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(32),
  lastname VARCHAR(32),
  company VARCHAR(255),
  phone VARCHAR(12),
  role VARCHAR(20)
);

CREATE TABLE posts (
  pid SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR,
  search_vector TSVECTOR,
  user_id INT REFERENCES users(uid),
  author VARCHAR REFERENCES users(username),
  date_created TIMESTAMP,
  like_user_id INT[] DEFAULT ARRAY[]::INT[],
  likes INT DEFAULT 0
);

CREATE TABLE comments (
  cid SERIAL PRIMARY KEY,
  comment VARCHAR(255),
  author VARCHAR REFERENCES users(username),
  user_id INT REFERENCES users(uid),
  post_id INT REFERENCES posts(pid),
  date_created TIMESTAMP
);

CREATE TABLE messages (
  mid SERIAL PRIMARY KEY,
  message_sender VARCHAR(255) REFERENCES users(username),
  message_to VARCHAR(255) REFERENCES users(username),
  message_title VARCHAR(255),
  message_body VARCHAR,
  date_created TIMESTAMP
);

CREATE TABLE appointments (
  aid SERIAL PRIMARY KEY,
  title VARCHAR(50),
  start_time TIMESTAMP WITH TIME ZONE UNIQUE,
  end_time TIMESTAMP WITH TIME ZONE UNIQUE
);

CREATE TABLE projects (
  prid SERIAL PRIMARY KEY,
  title VARCHAR(255),
  supervisor VARCHAR(255),
  leader VARCHAR(255),
  pkey VARCHAR(10),
  members TEXT [],
  description VARCHAR(255),
  start_time TIMESTAMP WITH TIME ZONE UNIQUE,
  end_time TIMESTAMP WITH TIME ZONE UNIQUE
);


INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (1, 'admin', 'a@a.pl', true, '2019-12-16 19:25:51.24', '2019-12-16 19:25:51.24', '$2b$10$RQXrJbYJPfFhfqTe/UuyEO0UpBM0r7kNU3aTcgV4FeXlG2J3K8tOu', 'admin', 'admin', 'admin', '888777666', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (2, 'admin2', 'a1@a.pl', ,'2019-12-17 01:43:51.038', '2019-12-17 01:43:51.038', '$2b$10$.oXMe1.B3k0AHoAySI59xORdNk5aQ7k/vYDHhveUoe6wLH3rEMT/2', 'admin', 'admin', 'admin', '111222333', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (3, 'user', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (4, 'user1', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (5, 'user2', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (6, 'user3', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (7, 'opiekun', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'opiekun', 'opiekun', 'opiekun', 'XXX', '888777666', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (8, 'kierownik', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'kierownik', 'kierownik', 'kierownik', 'XXX', '888777666', 'Leader');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (9, 'klient', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'klient', 'klient', 'klient', 'XXX', '888777666', 'Client');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (10, 'koordynator', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'koordynator', 'koordynator', 'koordynator', 'XXX', '888777666', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (11, 'student', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'student', 'student', 'student', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (12, 'student2', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'student', 'student', 'student', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (13, 'user4', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (14, 'admin', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'admin', 'Jakiś', 'User', 'XXX', '888777666', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (15, 'Anastazy', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'Anastazy', 'Anastazy', 'Anastazy', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (16, 'Agata', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'Agata', 'Agata', 'Agata', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (17, 'Rafał', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'Rafał', 'Rafał', 'Rafał', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (18, 'Radek', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'Radek', 'Radek', 'Radek', 'XXX', '888777666', 'Student');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (19, 'Patryk', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'Patryk', 'Patryk', 'Patryk', 'XXX', '888777666', 'Student');





INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (1, 'student project', 'opiekun', 'kierownik', 'e*j45',ARRAY ['user','user1','user2','user3','user4' ], 'test description', '2019-09-22 19:10:25', '2019-09-22 19:10:25');
INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (2, 'student project1', 'opiekun', 'kierownik', '$G451h',ARRAY ['student','student2','user1','user2','user3','user4' ], 'test description', '2019-09-22 19:10:26', '2019-09-22 19:10:26');
INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (3, 'student project2', 'opiekun', 'kierownik', '#17J1',ARRAY ['student','student2','user2','user3' ], 'test description', '2019-09-12 19:10:25', '2019-09-12 19:10:25');
INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (4, 'student project3', 'opiekun', 'kierownik', '^&7Ug',ARRAY ['user2','user3' ], 'test description', '2019-09-11 19:10:25', '2019-09-11 19:10:25');
INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (5, 'student project4', 'opiekun', 'kierownik', '!h%6r',ARRAY ['user','student2' ], 'test description', '2019-09-07 19:10:25', '2019-09-07 19:10:25');
INSERT INTO projects (prid, title, supervisor, leader, pkey, members, description, start_time, end_time)
VALUES (6, 'student project5', 'opiekun', 'kierownik', 'L039c',ARRAY ['student','student2' ], 'test description', '2019-09-04 19:10:25', '2019-09-04 19:10:25');


DROP TABLE projects;
DROP TABLE appointments;
DROP TABLE messages;
DROP TABLE comments;
DROP TABLE posts;
DROP TABLE users;