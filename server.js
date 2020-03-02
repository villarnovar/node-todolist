
const express = require("express");
import express from "express";
// initialize my app
const app = express();

// initialize the PORT
const PORT = process.env.PORT || 4000
npm
app.get("/detail",(req, res) => {
    res.send("My first Nodejs connection");
})

// listening to the PORT
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

