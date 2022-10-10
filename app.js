const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("hi")
})

app.listen(3000, () => {
  console.log('express now is listening on prot 3000.')
})