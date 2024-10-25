const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://localhost:27017/dropship", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dropship API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
