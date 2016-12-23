const express = require ('express');
const port = process.port||3001;

var app = express();



app.get('/', (req,res) => {
  res.send('Home')
  console.log("Someone found the home page")
})

app.get('/about', (req,res) => {
  res.send('About')
  console.log("Someone found the about page")
})

app.listen(port, ()=> {
  console.log(`Server is up on port ${port}`)
})
