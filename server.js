const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConnection');
const ticketRoutes = require('./routes/ticketRoute');
const {config} = require("dotenv")

const app = express();

config({path:"./config/config.env"});
connectDB();

app.use(bodyParser.json());

app.use('/api', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
