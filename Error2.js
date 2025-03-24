const express = require('express')
const app = express()
const port = 3006

app.get('/home', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })