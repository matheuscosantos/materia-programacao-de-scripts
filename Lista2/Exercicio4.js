class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    print = (nome, idade) => {
        console.log(this.nome +" "+ this.idade);
    }
}


const pessoa1 = new Pessoa("Matheus",30);
const pessoa2 = new Pessoa("Viviane",26);

pessoa1.print();
pessoa2.print();