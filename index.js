const express = require("express");
const app = express();
const user = require("./api/user");

app.use(express.json({ extended: false }));

app.use("/api/user", user)



// const app = require('express')();


// app.get('/', (req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end(`Hello! Go to item`);
// });

// app.get('/item/:slug', (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

// module.exports = app;
