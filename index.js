const express = require('express');
const app = express();

const port = 3002;
 app.get("/", (req, res,next) => {
    console.log(req);
    res.send("Hello World!");
 })

 app.get("/pokemon"),(req,res,next)=> {
   console.log(req);
   res.json({name: "Pikachu", type: "Electric"});
 }

 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 })