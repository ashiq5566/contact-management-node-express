const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use("/api/contacts", require("./Routes/ContactRouter"));
app.use("/api/users", require("./Routes/UsersRouter"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on ${port}`)
})