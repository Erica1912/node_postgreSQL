CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
)

INSERT INTO users (name, email) VALUES
('joe', 'Joe@ea.com'),
('Erica', 'er@ea.com');