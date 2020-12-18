const express = require("express");
const app = express();

const port = process.env.PORT || 5555;

app.get('/', (req,res)=>{
    res.send('Hi from Server')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
