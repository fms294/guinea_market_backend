const express = require("express");
const userRouter = require("./router/user");
const listingRouter = require("./router/listing");
require("../src/db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(listingRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is on | " + port);
});
