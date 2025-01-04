const express = require('express')
const cors = require('cors');
const app = express()
const { db } = require ('./db/db')

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('Hello World')
})

const server = () => {
    db()
    app.listen(PORT, ()=> {
        console.log('listening to port:', PORT)
    })
}

server ()