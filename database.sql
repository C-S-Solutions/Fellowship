-- Create Database named fellowship

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(100),
    email VARCHAR(150),
    user_picture VARCHAR(150),
    user_street VARCHAR(40),
    user_city VARCHAR(20),
    user_state VARCHAR(20),
    user_zip VARCHAR,
	code VARCHAR(20)
);