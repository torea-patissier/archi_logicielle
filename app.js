const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const users = require('./users.json');
app.use(bodyParser.json())
app.use(morgan('dev'));

//me
// app.get('/api/users', (req,res)=>{
//   const offset = req.query.offset;
//   const limit = req.query.limit;
//   const result = users.slice(offset,limit);
// res.status(200).send(result);
// });

//courses
app.get('/api/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let limit = +req.query.limit || 20;
  limit = limit > 1000 ? 20 : limit;
  const skip = +req.query.skip || 0;
  res.send(users.slice(skip, skip + limit));
});

app.post('/api/users', (req,res) => {
  console.log(req.body);
  res.status(204).send();
})

app.listen(3000, () => {
  console.log('App is litenning');
})
