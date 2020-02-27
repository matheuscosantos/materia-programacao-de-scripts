reverse2 = (palavra) => {
    let palavraInvertida = palavra.split('')
                                  .reverse()
                                  .join('')
    return palavraInvertida;
  }
  
  console.log(reverse2("Eta lasquera"));