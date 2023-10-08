const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
  res.send('hello from my first entry')

})
app.get('/data',(req,res)=>{
  res.send('hey whats app')

})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})