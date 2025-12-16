const express = require('express');
const cors = require('cors');
const app = express();
const port = 4504 ;
require('dotenv').config();
const emailRoutes = require('./src/routes/email');

app.use(cors({
  origin: "localhost:4467",
  methods: ["GET"],
}));

app.use(express.json());
app.use('/email', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});