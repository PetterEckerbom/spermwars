const express = require('express');
const app = express();

app.listen(8080, ()=>{
  console.log("listening to port 8080");
})

app.use(express.static('public'));

app.get('/', (req, res)=>{
res.send("2");
});
