const express = require("express");
const app = express();

const db = require("./src/db");
const userRoute = require("./src/router/user");

app.get("/", (req, res) => {
  res.send("Hi from Server");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
