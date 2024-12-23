const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const cors = require('cors');
const {logger} = require('./middlewares/logger')
const {auth} = require('./middlewares/auth')
const errorHandler = require('./utils/error');
require('dotenv').config();
const connectMongoDB = require('./utils/mongo');

// Connect to MongoDB
// connectMongoDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World! Lagi");
});

app.use('/users', logger, userRoutes);
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);

// Handle 404 - Route not found
app.all('*', (req, res, next) => {
  next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware (should be last)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
