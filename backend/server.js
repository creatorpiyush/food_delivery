const express = require("express");
const app = express();

const port = process.env.PORT || 5555;

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
