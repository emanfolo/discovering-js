const express = require('express');
const app = express();
const port = 3000;

const obj1 = [{message: 'hi' }]
const counter = {counter: 0}

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({title: 'hello world'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost${port}`)
})

app.get('/message', (req, res) => {
  res.json(obj1)
})


app.post('/message', (req, res) => {
  res.json(req.body);
  const extra = req.body
  obj1.push(extra)
});

app.get('/counter', (req, res) => {
  res.json(counter)
})

app.post('/counter', (req, res) => {
  res.json(req.body)
  counter.counter += 1
})

app.delete('/counter', (req, res) => {
  res.json(req.body)
  counter.counter = 0 
})

//POST /message — sets the value of the message, using JSON data

/*
app.post('/message', (req, res) => {
  res.send("New message")
})

app.get('/message', (req, res) => {
  res.send("New message")
})

*/