require("dotenv").config();
// connect to backend
const express = require("express");
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

// ---------------------
// add controller and router folder inside file like product.js inside all code complete after write this code
const products_routes = require("./routes/product");
// ------------------

app.get("/",(req, res)=>{
    res.send("Hello im testing");
});

// middleware or set router products_routes after create
app.use("/api/product",products_routes) // set url like(http://localhost:5000/api/product)
const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes im connected`)
        })
    } catch (error) {
        console.log(error)
    }
};

start();