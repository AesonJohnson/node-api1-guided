const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("hey there");
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})