const express = require("express");
const shortid = require("shortid");
const server = express();

let hubs = [];

server.get("/", (req, res) => {
    res.send("hey there");
})

server.get("/hello", (req, res) => {
    res.json({ hello: "lambda school" })
})

// CREATE {POST}
server.post("/api/hubs", (req, res) => {
    const hubInfo = req.body; 

    hubInfo.id = shortid.generate;

    hubs.push(hubInfo);
    res.status(201).json(hubInfo);
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})