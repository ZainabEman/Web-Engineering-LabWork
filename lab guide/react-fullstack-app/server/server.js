const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.use('/api', userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));