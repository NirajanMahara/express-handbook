const express = require('express')
const app = express()

app.get('/', (req, res) => res.send("Hello World!"))
app.listen(3000, () => console.log('Server ready'))

// method for every HTTP verb: get() , post() , put() , delete() , patch()
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })