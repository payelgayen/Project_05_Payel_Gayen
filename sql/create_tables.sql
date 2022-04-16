DROP TABLE IF EXISTS comments;
CREATE TABLE IF NOT EXISTS comments (
   id SERIAL PRIMARY KEY,
   comment TEXT NOT NULL,
   movie_id INT NOT NULL,
   created_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
   id VARCHAR(72) PRIMARY KEY,
   firstname VARCHAR(250) NOT NULL,
   lastname VARCHAR(250) NOT NULL,
   email VARCHAR(250) NOT NULL,
   password VARCHAR(72) NOT NULL,
   created TIME DEFAULT now()
);

DROP TABLE IF EXISTS rating;
CREATE TABLE IF NOT EXISTS rating (
   id SERIAL PRIMARY KEY,
   rating TEXT NOT NULL,
   movie_id INT NOT NULL,
   user_id VARCHAR(72) references users(id)
);