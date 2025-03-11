const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // To parse JSON requests
app.use(cors()); // To handle CORS issues

//  MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Your MySQL username
    password: "", // Your MySQL password
    database: "items_db"
});

db.connect(err => {
    if (err) {
        console.error(" MySQL Connection Error:", err);
    } else {
        console.log(" Connected to MySQL!");
    }
});

//  POST API to Insert Item
app.post('/api/items/mysql', (req, res) => {
    console.log("Request received:", req.body);

    const { name, description, price } = req.body;
    if (!name || !description || !price) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const sql = "INSERT INTO items (name, description, price) VALUES (?, ?, ?)";
    db.query(sql, [name, description, price], (err, result) => {
        if (err) {
            console.error(" MySQL Insert Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        console.log(" Inserted successfully:", result);
        res.json({ message: "Item inserted successfully", itemId: result.insertId });
    });
});

//  GET API to Fetch Item by ID
app.get('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    
    const sql = "SELECT * FROM items WHERE id = ?";
    db.query(sql, [itemId], (err, result) => {
        if (err) {
            console.error("❌ MySQL Fetch Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json(result[0]);
    });
});


//  GET API to Fetch All Items
app.get('/api/items', (req, res) => {
    const sql = "SELECT * FROM items";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("❌ MySQL Fetch Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "No items found" });
        }

        res.json(result);
    });
});

//  PUT API to Update an Item by ID
app.put('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const sql = "UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?";
    db.query(sql, [name, description, price, itemId], (err, result) => {
        if (err) {
            console.error("❌ MySQL Update Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json({ message: "Item updated successfully" });
    });
});

// .; DELETE API to Remove an Item by ID
app.delete('/api/items/:id', (req, res) => {
    const itemId = req.params.id;

    const sql = "DELETE FROM items WHERE id = ?";
    db.query(sql, [itemId], (err, result) => {
        if (err) {
            console.error("❌ MySQL Delete Error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json({ message: "Item deleted successfully" });
    });
});


// ✅ Start Server
app.listen(3001, () => {
    console.log("🚀 Server running on port 3001");
});
