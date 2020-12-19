const mongoose = require("mongoose");

const db_url = "mongodb+srv://food_delivery_db:food_delivery_db@cluster0.iy7ou.mongodb.net/food_delivery_db?retryWrites=true&w=majority";

mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, link) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB Connected Successfully...");
    }
  }
);
