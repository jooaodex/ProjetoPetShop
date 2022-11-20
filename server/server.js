const express = require('express')
const fileupload = require('express-fileupload')
const fs = require('fs')
const cors = require('cors')
const app = express()
var path = require('path')
const database = require('./models/db'); 

const port = 5000

app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))

app.use(cors())

app.get('/agendamento', (req,res) => {
    res.json([{'teste': 'parametro agendamento'}])
})

app.get('/itens', function(req,res){
    db.query(`SELECT * FROM petshop.itens`, function(erro, resultadoItens){
        if(erro){
            throw erro;
        }
        res.json([{
            itens: resultadoItens
        }])
    })
})

app.get('/item', function(req,res){
    db.query(`SELECT * FROM petshop.itens`, function(erro, resultadoItem){
        if(erro){
            throw erro;
        }
        res.json([{
            item: resultadoItem
        }])
    })
})

app.get('/admin', function(req,res){
    db.query(`SELECT * FROM petshop.itens`, function(erro, resultadoItens){
        if(erro){
            throw erro;
        }
        res.json([{
            itens: resultadoItens
        }])
    })
})

app.post("/admin/insertItem", function(req,res){
    db.query(`INSERT INTO petshop.itens(nomeItem, imgUrl, precoItem, descricaoItem) VALUES (?,?,?,?)`,
    [req.body.nome, req.body.img, req.body.preco, req.body.desc], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    })
})

// ficar abaixo de tudo
app.listen(port, () => {
    console.log('rodando na porta 5000')
})