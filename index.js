const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World! Lagi");
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
