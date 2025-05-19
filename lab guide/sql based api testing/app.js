const express = require('express');
const dotenv = require('dotenv');
const mathRoutes = require('./routes/mathRoutes');
const db = require('./models/db');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api', mathRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});