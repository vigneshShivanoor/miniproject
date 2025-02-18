const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { error } = require("console");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/public", express.static("public"));

mongoose.connect("mongodb://localhost:27017/admin");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Not using bcrypt as requested
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email: username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/Images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});
app.use("/Images", express.static(path.join(__dirname, "public/img")));

app.get("/events", (req, res) => {
  let data = fs.readFileSync("./EventFiles/eventfiles.json");
  let eventData = JSON.parse(data);
  res.json(eventData);
});

app.post("/update", (req, res) => {
  let data = fs.readFileSync("./EventFiles/eventfiles.json");
  data = JSON.parse(data);
  data.push({ id: data.length, ...req.body });
  fs.writeFileSync(
    "./EventFiles/eventfiles.json",
    JSON.stringify(data),
    (err) => console.log(err)
  );
  res.status(200).json("done");
});

app.post("/upload", upload.single("image"), (req, res) => {
  let data = fs.readFileSync("./EventFiles/eventfiles.json");
  data = JSON.parse(data);
  const newData = {
    id: data.length,
    ...req.body,
    imageUrl: req.file ? `/Images/${req.file.filename}` : null,
  };
  data.push(newData);
  fs.writeFileSync(
    "./EventFiles/eventfiles.json",
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Error writing to file");
      }
    }
  );
  res.status(200).json("done");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
