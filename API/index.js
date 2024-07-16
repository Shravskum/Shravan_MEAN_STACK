import express from 'express';
import { getTransaction, getTransactionById } from "./app/user-tx.js";

const app = express()
const port = 3000

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/getTx', getTransaction)

app.get('/getTxById', getTransactionById)