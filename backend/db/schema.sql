CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT
);
CREATE TABLE IF NOT EXISTS workouts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  type TEXT NOT NULL,
  duration INT NOT NULL,
  calories INT,
  date DATE NOT NULL
);
CREATE TABLE IF NOT EXISTS daily_stats (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  date DATE NOT NULL,
  steps INT DEFAULT 0,
  calories_intake INT DEFAULT 0
);