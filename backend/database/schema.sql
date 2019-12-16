CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  date_created DATE,
  last_login DATE,
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