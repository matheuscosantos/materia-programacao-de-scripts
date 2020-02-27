var inverteString = function(frase) {
    return frase.split('')
                .reverse()
                .join('');
}

console.log(inverteString('Eta lasquera'));