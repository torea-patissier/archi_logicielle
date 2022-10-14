const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const users = require('./users.json');

app.use(bodyParser.json());
app.use(morgan('dev'));

//my pagination 
app.get('/api/users', (req,res)=>{
  const offset = req.query.offset;
  const limit = req.query.limit;
  const result = users.slice(offset,limit);
  res.status(200).send(result);
});

app.post('/api/users', (req,res) => {
  console.log(req.body);
  res.status(204).send();
})

app.listen(3000, () => {
  console.log('App is litenning');
})

 /**
   *
   * @openapi
   * /api/users:
   *   get:
   *     parameters:
   *       - name: limit
   *         in: query
   *         schema:
   *           type: integer
   *       - name: skip
   *         in: query
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: users
   *         content:
   *           application/json;charset=utf-8:
   *               schema:
   *                 type: array
   *                 items:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: integer
   *                     name:
   *                       type: string
   *                     createdAt:
   *                       type: string
   *                     password:
   *                       type: string
   *
   */

//courses pagination example
// app.get('/api/users', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   let limit = +req.query.limit || 20;
//   limit = limit > 1000 ? 20 : limit;
//   const skip = +req.query.skip || 0;
//   res.send(users.slice(skip, skip + limit));
// });

