const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use("/api/contacts", require("./Routes/ContactRouter"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on ${port}`)
})