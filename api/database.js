require('dotenv').config()
const {Client} = require('pg')

const conectionString = process.env.DATABASE_URL


const client = new Client(conectionString)


client.connect()

module.exports = client
