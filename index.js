var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Request Debugger: Send POST to http://localhost:3000')
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.send('See the log')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})