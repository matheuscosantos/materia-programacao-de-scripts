const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.listen(3000, () => {
    //callback
    console.log("Up");
});

//curl http://localhost:3000/op/10/20
app.get('/op/:a/:b',(req,res)=>{
    let a = req.params.a;
    let b = req.params.b;
    a=parseInt(a);
    b=parseInt(b);
    res.send(a+b+'');
})

//curl -X POST http://localhost:3000/op/10/20
app.post('/op/:a/:b',(req,res)=>{
    let a = req.params.a;
    let b = req.params.b;
    a=parseInt(a);
    b=parseInt(b);
    res.send(a*b+'');
})

app.use(express.static("../public"));

app.use("/msg", express.static("../public/a.txt"));

app.all('/cad/cli', (req,res) => {res.send('rota cad/cli');})

//curl http://localhost:3000
app.use((req,res) => {
    res.send("Desconhecido");
})
