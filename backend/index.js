require("dotenv").config();
const express = require("express");
const { createConnection } = require("mysql2");
const cors = require("cors");
const path = require("path");
  
const app = express();

// Using environment variables for the database connection
const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Database connection established");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./dist")));

app.get("/test", (req, res) => {
  console.log("first");
  res.send("Hello");
});

// Fetch banner details
app.get("/api/banner/:id", async (req, res) => {
  const { id } = req.params;

  const q = "SELECT * FROM banners WHERE id = ?";
  db.query(q, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ status: false, error: "Database error" });
    }
    return res.status(200).json({ status: true, data: data[0] });
  });
});

// Edit banner details
app.put("/api/banner/:id", async (req, res) => {
  const { id } = req.params;
  const { description, endtime, link, status } = req.body;

  const q =
    "UPDATE banners SET description = ?, endtime = ?, link = ?, status = ? WHERE id = ?";
  db.query(q, [description, endtime, link, status, id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ status: false, error: "Database error" });
    }
    return res
      .status(200)
      .json({ status: true, message: "Banner updated successfully" });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(5000, () => {
  console.log("Server running on port 8800");
});
