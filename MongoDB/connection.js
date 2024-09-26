const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product_model.js');

const app = express();

app.use(express.json());

app.listen(5050, () => {
  console.log('server is running on port 5050');
});

app.get('/', (req, res) => {
  res.send("Hello from Node API server");
});

app.post('/api/products', (req, res) => {
  try {
    // Add logic here for creating a product
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.connect("mongodb+srv://yd850679:qDPD9q6fQUtsY4Si@cluster1.v0i4n.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster1")
.then(() => {
  console.log("database connected");
})
.catch((error) => {
  console.log("connection failed:", error.message); // Log the error message for better debugging
});
