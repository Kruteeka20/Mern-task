require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));