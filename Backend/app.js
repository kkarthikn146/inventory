const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const customerRoute = require("./routes/customersRoute.js");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.set("useFindAndModify", false);

mongoose.connect(
  "mongodb+srv://admin-karthik146:kkn@1406@cluster0.pmlzy.mongodb.net/inventory?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected..");
});

app.get("/", (req, res) => {
  res.json({
    message: "success",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(morgan("tiny"));

app.use("/api/customers", customerRoute);

app.listen(PORT, console.log(`Server running on ${PORT}`));
