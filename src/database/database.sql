/*comando para creación de la base de datos usuario*/
CREATE DATABASE usuario

/*Ahora usamos el comando para la creación de la tabla users*/
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
)
/*Se realiza el primer insert de datos a  la tabla nos permite verificar si está corriendo correctamente la base de datos */
INSERT INTO users (name, email) VALUES
('joe', 'Joe@ea.com'),
('Erica', 'er@ea.com');