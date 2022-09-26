const express = require('express');
let app = express();

app.get('/',(req,res)=> res.send("Testando Express, porque DEUS é mais!"));
app.get('/contato',(req,res)=> res.send({nome:"Keyla Delpupo", idade: 23}));
app.get('/dados',(req,res)=> res.send({profissao: "Agrônoma", ativo: "null"}));


app.listen(3000,()=> console.log("Servidor rodando na porta 3000"));