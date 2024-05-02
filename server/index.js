const express=require('express')
const dotenv=require("dotenv")
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();
require('./db')
const app=express()
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.json({message:"Hello Hash URL"})
})

app.listen(PORT,() =>console.log("Server is running at port 8000"))