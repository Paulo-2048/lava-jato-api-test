const express = require("express");
const router = express.Router();
const con = require('./database')


router.get("/", async (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    let sql = 'SELECT * FROM user_acess'
    con.query(sql, (err, response) => {
    res.send(response['rows'])
    console.log(response)});
    
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;

// const express = require('express')
// const {Pool, Client} = require('pg')

// const con = require('./database')

// const app =  express()

// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`User:`);
//   let sql = 'SELECT * FROM user_acess'
//   con.query(sql, (err, response) => {
//     res.send(response['rows'])
//     console.log(response)})
// });

// module.exports = app;
