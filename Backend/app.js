const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

// colors.setTheme({
//   custom: ['red', 'underline']
// });

//  ES6 Module
// "type" : "module", // in package.json
// import dotenv from "dotenv";

//routes
const customerRoute = require("./routes/customersRoute.js");
const userRoute = require("./routes/postgresRoutes/userRoutes");

//dbConfigs
const mongoDB = require("../Backend/dbConfig/mongoDB");
// const postgresDB = require("../Backend/dbConfig/postgresDB");

const app = express();
const PORT = process.env.PORT || 8000;

//dotenv config
dotenv.config();

mongoDB();
// postgresDB();

app.get("/", (req, res) => {
  res.json({
    message: "success",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(morgan("tiny"));

app.use("/api/users", userRoute);
app.use("/api/customers", customerRoute);

app.listen(PORT, () => console.log(`Server running on ${PORT}`.cyan.bgBlack));
