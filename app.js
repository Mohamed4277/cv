const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/',(req,res)=> res.redirect("/home.html"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

