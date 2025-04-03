import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/user", (req, res) => {
    res.send("Fetching user data");
  });

app.post("/api/user", (req, res) => {
  res.send("User is created");
});

app.put("/api/user/:id", (req, res) => {
  res.send("User is updated");
});

app.delete("/api/user/:id", (req, res) => {
  res.send("User is deleted");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
