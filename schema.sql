-- This is an app designed to help users keep track of their long term goals for the upcoming years

-- Table of users who have goals in the database
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    gender TEXT
);

-- Table of goals from each user
CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    goal TEXT,
    completed BOOLEAN,
    time_frame INTEGER,
    user_id INTEGER REFERENCES users (id)
);