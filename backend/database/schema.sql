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
  title VARCHAR(50),
  start_time TIMESTAMP WITH TIME ZONE UNIQUE,
  end_time TIMESTAMP WITH TIME ZONE UNIQUE
);

INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (3, 'user', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Admin');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (4, 'user1', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Admin');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (5, 'user2', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Admin');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (6, 'user3', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'user', 'fuser', 'luser', 'XXX', '888777666', 'Admin');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (7, 'opiekun', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'opiekun', 'opiekun', 'opiekun', 'XXX', '888777666', 'Supervisor');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (8, 'kierownik', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'kierownik', 'kierownik', 'kierownik', 'XXX', '888777666', 'Leader');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (9, 'klient', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'klient', 'klient', 'klient', 'XXX', '888777666', 'Client');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (10, 'koordynator', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'koordynator', 'koordynator', 'koordynator', 'XXX', '888777666', 'Coordinator');
INSERT INTO users (uid, username, email, email_verified, date_created, last_login, password, firstname, lastname, company, phone, role)
VALUES (11, 'student', '1@2.pl', true, '2019-09-22 19:10:25', '2019-09-22 19:10:25', 'student', 'student', 'student', 'XXX', '888777666', 'Student');


DROP TABLE projects;
DROP TABLE appointments;
DROP TABLE messages;
DROP TABLE comments;
DROP TABLE posts;
DROP TABLE users;