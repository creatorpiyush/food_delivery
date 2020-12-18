const mongoose = require("mongoose");

const db_url = `mongodb://localhost:27017/user_db`;

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
      console.log("DB Connect Success...");
    }
  }
);
