const vet = []; // a variável vet possui o endereço do array
não gera erro, pois estamos adicionando um elemento no array que a variável vet está apontando
vet[0] = 10; // gera erro, pois estariámos trocando o conteúdo da variável vet
vet = [10,20,30,40];
console.log(vet); // não gera erro, pois é apenas a leitura da variável vet

const obj = {}; // a variável obj possui o endereço do objeto
obj.nome = 'Ana'; // o objeto passa a ter uma propriedade
obj = {}; // gera erro, pois estamos trocando o conteúdo da variável obj
console.log(obj);