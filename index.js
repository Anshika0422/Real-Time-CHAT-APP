const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
//    .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//    })
   .connect(process.env.MONGO_URL)
   .then(() => {
    console.log("MongoDB Connected!");
   })

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT ${process.env.PORT}`);
});