// Funções Arrow não possuem this em seu escopo

const aluno = {
    nome:'Paulo',
    print: function(){
        console.log(this.nome);
    }
}

const professor = {
    nome:'José',
    print: () => {
        console.log(this.nome);
    }
}

aluno.print();
professor.print("Matheus");

