import express from "express";
import user from "../model/user.js";

const route = express.Router();

//Create a user
route.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    //check if user already exist
    const existUser = await user.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    //create and save user
    const newUser = new user({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default route;
