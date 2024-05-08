const express = require('express');
const path = require('path'); 
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const port = 3002;
app.get("/", (req, res,next) => {
   console.log(req);
   res.render('index', {title: "Home"});
})

app.get("/pokemon",(req,res,next)=> {
  res.json({name: "Pikachu", type: "Electric"});
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})