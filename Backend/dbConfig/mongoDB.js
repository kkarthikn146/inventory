const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected : ${conn.connection.host}`.white.bgGreen.underline
    );
    // mongoose.connection.on("connected", () => {
    //   console.log(
    //     `MongoDB connected : ${conn.connection.host}`.white.bgGreen.underline
    //   );
    // });
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline);
    process.exit(1);
  }
};

module.exports = mongoDB;
