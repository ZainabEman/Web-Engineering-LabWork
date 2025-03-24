CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Demo Data
INSERT INTO blogs (title, author, content) VALUES
('Modern Web Development Trends', 'Asim Nawaz', 'Content about modern web dev practices using MERN stack, GraphQL, and more...'),
('AI in Everyday Life', 'Ayesha Khan', 'How artificial intelligence is transforming healthcare, education, and communication.'),
('Cybersecurity Best Practices', 'Ali Raza', 'This blog covers how to stay safe online in 2025...');
