const express = require('express')
const config = require('config')


const app = express()

app.use('/', require('./routes/routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        app.listen(PORT, () => console.log(`Server has been started at port ${PORT}`))
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()