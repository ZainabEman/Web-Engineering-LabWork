CREATE DATABASE IF NOT EXISTS user_auth_db;
USE user_auth_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Demo Users
INSERT INTO users (name, email, password) VALUES
('Areeba Khan', 'areeba@example.com', '12345'),
('Ali Raza', 'ali@example.com', 'admin123'),
('Zoya Malik', 'zoya@example.com', 'pass456');
