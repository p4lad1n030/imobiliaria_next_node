const express = require('express');

const server = express();


// query params = ?nome=NodeJS 
// route params = /curso/2
// request body = {nome: 'NodeJS', tipo: 'Backend'}

// localhost:3000/curso
server.get('/curso',(req,res)=>{
 return res.json({curso: 'NodeJS'})
})
server.listen(3000)