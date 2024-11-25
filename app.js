//# CONFIG ENVIRONMENT VARIABLES
require("dotenv").config();

//# CONFIG EXPRESS
const express = require("express");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

//* JSON PARSER FOR BODY REQUESTS
app.use(express.json());

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
