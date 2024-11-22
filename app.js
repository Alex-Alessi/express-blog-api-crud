const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.static("public"));

const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});

app.get("/", (req, res) => {
  const text = "Il mio Server";
  res.type("json").send("Il mio Server");
});
