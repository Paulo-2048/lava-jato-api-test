require('dotenv').config()
const {Client} = require('pg')

const conectionString = 'postgresql://admin-sys:KZWAV6CGEmdR@yf@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/automative-stetic-5258.defaultdb?sslmode=verify-full'


const client = new Client(conectionString)


client.connect()

module.exports = client
