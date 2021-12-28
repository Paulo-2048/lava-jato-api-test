const express = require('express')
const {Pool, Client} = require('pg')

const con = require('../database')


const app =  express()
const port = process.env.Port || 3000

app.get('/user', (req, res) => {
    try {
        let sql = 'SELECT * FROM user_acess'
        con.query(sql, (err, response) => {
            res.send(response['rows'])
            console.log(response)
        })
        
    } catch (err) {
        console.error(err)
    } 
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })