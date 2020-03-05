function saudacao(hora) {
  return new Promise((x, y) => {
    console.log("Bom dia")
    console.log("Boa noite")
  });
}

saudacao();