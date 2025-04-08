// server/controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
      const { email, password, role } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }
  
      const hashed = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashed, role });
      res.status(201).json({ message: "User created" });
  
    } catch (err) {
      console.error("Registration error:", err);
  
      // Fallback in case of race condition on unique index
      if (err.code === 11000) {
        return res.status(400).json({ error: "Email already exists" });
      }
  
      res.status(500).json({ error: "Server error" });
    }
  };
  
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      console.log("Login attempt with:", email); // 👈 Debug
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials (email not found)" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials (wrong password)" });
      }
  
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
  
      res.json({ token, role: user.role });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "Server error" });
    }
  };