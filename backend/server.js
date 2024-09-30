const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Allow JSON parsing

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://muyong2009:zChCjFXHTmsg60Zk@yongmu-cluster.5bmkg.mongodb.net/chinese_learning?retryWrites=true&w=majority&appName=YongMu-Cluster'; // Replace with your connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Course Schema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Course = mongoose.model('Course', courseSchema);

// API route to get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

