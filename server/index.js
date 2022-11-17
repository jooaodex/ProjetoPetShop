const express = require('express')
const fileupload = require('express-fileupload')
const fs = require('fs')
const cors = require('cors')
const app = express()
var path = require('path')

const port = 5000

app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))

app.use(cors())

app.get('/home', (req,res) => {
    res.json([{'teste': 'parametro teste texto'}])
})






// ficar abaixo de tudo
app.listen(port, () => {
    console.log('rodando na porta 5000')
})