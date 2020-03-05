reverse = (palavra) => {
    let auxiliar = ""
    let palavraInvertida = ""
  
    for (i = palavra.length - 1; i >= 0; i--) {
      palavraInvertida = palavraInvertida + palavra[i];
    }
  
    return palavraInvertida;
  }
  
console.log(reverse("Matheus"))
  
  