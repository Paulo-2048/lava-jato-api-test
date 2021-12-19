require('dotenv').config()
const mysql = require('mysql')

const conection = mysql.createConnection(process.env.DATABASE_URL)


try {
    conection.connect()
} catch (err) {
    console.log(err)
}

module.exports = conection
