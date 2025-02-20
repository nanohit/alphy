const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Dark Academia Hub!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

