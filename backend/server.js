// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Temporary storage for users (use a database in real apps)
let users = [];

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Check if the email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already in use." });
  }

  // Add the new user to the array (replace with DB in production)
  users.push({ email, password });

  res.status(200).json({ message: "User created successfully." });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

