const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = process.env.port || 4000

app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log('Server running')
})