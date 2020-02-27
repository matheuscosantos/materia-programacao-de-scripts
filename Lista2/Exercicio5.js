class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    print = (nome, idade) => {
        console.log( this.nome +" "+ this.idade );
    }
}

class Cliente extends Pessoa{
    constructor(nome, idade, telefone){
        super(nome, idade)
        this.telefone = telefone;
    }

    print = (nome, idade, telefone) => {
        console.log( this.nome +" "+ this.idade + " " + this.telefone);
    }
}

const cliente1 = new Cliente("Matheus",30,12982477155);
const cliente2 = new Cliente("Viviane",26,123123213213);


cliente1.print();
cliente2.print();