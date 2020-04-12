const express = require("express");
const path = require("path");

const app = new express();
const port = process.env.PORT || 5589;

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function(req, res) {
  const paths = [__dirname, "../build", "index.html"];
  return res.status(200).sendFile(path.join(...paths));
});

app.listen(port, () => {
  console.log("Server on: http://localhost:" + port);
});
