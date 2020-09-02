const express = require("express");
const shortid = require("shortid");
const server = express();

let hubs = [];

server.use(express.json());

server.get("/", (req, res) => {
    res.send("hey there");
});

server.get("/hello", (req, res) => {
    res.json({ hello: "lambda school" })
});

// CREATE {POST}
server.post("/api/hubs", (req, res) => {
    const hubInfo = req.body; 

    hubInfo.id = shortid.generate;

    hubs.push(hubInfo);
    res.status(201).json(hubInfo);
});

// READ
server.get("/api/hubs", (req, res) => {
    res.status(200).json(hubs);
});

// DELETE
server.delete("/api/hubs:id", (req, res) => {
    const { id } = req.params;

    const deleted = hubs.find(hub => hub.id === id);

    if (deleted) {
        hubs= hubs.filter(hub => hub.id !== id);
        res.status(200).json(deleted);
    } else {
        res.status(404).json({message: "id not found"});
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});