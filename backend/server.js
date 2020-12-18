const express = require("express");
const app = express();


const port = process.env.PORT || 5555;

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${port}`);
})