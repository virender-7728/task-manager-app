
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const { config } = require('dotenv')

app.use(express.static('./public'))
app.use(express.json())

require('dotenv').config()
app.use('/api/v1/tasks',tasks)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()