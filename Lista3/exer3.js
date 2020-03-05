function aleatorio(min, max) {
  return new Promise((x, y) => {
    let nro = Math.floor(Math.random() * (max - min) + min);
  });
}

async function exibir() {
  let a = await aleatorio(30, 50);
  console.log(a);
}

exibir();