const express = require('express')
const mysql = require('mysql')
const con = require('../database')


const app =  express()
const port = process.env.Port || 3000

app.get('/flow', (req, res) => {
    try {
        let sql = 'SELECT * FROM fluxo'
        con.query(sql, (err, rows) => {
            res.send(rows)
            console.error(err)
        })
        
    } catch (err) {
        console.error(err)
    } 
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })