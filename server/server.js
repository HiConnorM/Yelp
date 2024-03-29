require('dotenv').config()
const express = require("express");
const morgan = require("morgan");

const db = require("./db");

const app = express();

app.use(express.json());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    const results = await db.query("select * from restaraunts");
    console.log(results);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        },
    });
});

// Get one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        },  
    });
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        },  
    });
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        },  
    });
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params.id);
    res.status(204).json({
        status: "success",
    });
} );

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is up and rolling on port ${port}`);
});
