const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/aboutme', (req,res) => {
  res.sendFile(__dirname + '/aboutme.html')
})

app.get('/contacts', (req,res) => {
  res.sendFile(__dirname + '/contacts.html')
})
app.get('/pictures', (req,res) => {
  res.sendFile(__dirname + '/pictures.html')
})

app.listen(3000, () => console.log('LIVE on 3000'))
