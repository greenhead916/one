const express = require ('express');
const port = process.port||3001;

var app = express();



app.get('/', (req,res) => {
  console.log("Someone found the home page")
})

app.listen(port, ()=> {
  console.log(`Server is up on port ${port}`)
})
