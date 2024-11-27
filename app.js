//# CONFIG ENVIRONMENT VARIABLES
require("dotenv").config();

//# CONFIG EXPRESS
const express = require("express");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

//* REGISTERING MIDDLEWARES
const manageErrors = require("./middlewares/manageErrors.js");
const notFound = require("./middlewares/notFound.js");

app.use(express.json());
app.use(express.static("public"));

//* REGISTERING ROUTES
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

//* MANAGE ERRORS
app.use(manageErrors);
app.use(notFound);

//* START LISTENING
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
