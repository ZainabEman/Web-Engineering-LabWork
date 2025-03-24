CREATE DATABASE IF NOT EXISTS todo_db;
USE todo_db;

CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Demo Tasks
INSERT INTO todos (title, status) VALUES
('Finish Node.js Task', 0),
('Prepare Presentation Slides', 1),
('Upload Code to GitHub', 0);
