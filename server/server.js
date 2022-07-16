require('dotenv').config()
const express = require("express");


const app = express();

// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        }
    })
});

// Get one restaurant
app.get("/api/v1/restaraunts/:restaurantid", (req, res) => {
    console.log(req.params);
});

// Create a restaurant
app.post("/api/v1/restaraunts", (req, res) => {
    console.log(req);
});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
