const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker + Kubernetes DevOps Project 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});