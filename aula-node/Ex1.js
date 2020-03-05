const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.send('Bom dia!');
});

app.get('/teste/:nome',(req,res)=>{
  let nome = req.params.nome;
  res.send('Boa tarde ' + nome);
});

app.post('/soma',(req,res)=>{
  let{x,y} = req.body;
  res.send(x+y);
});

app.listen(3100,()=>{
  console.log("Rodando... ");
});

