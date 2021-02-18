const express = require("express");
const userRouter = require("./router/user");
const listingRouter = require("./router/listing");
const aboutRouter = require("./router/about");
require("../src/db/mongoose");
const path = require("path");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(listingRouter);
app.use(aboutRouter);
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is on | " + port);
});
