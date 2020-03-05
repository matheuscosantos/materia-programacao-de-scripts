let p = new Promise((x,y) => {
  funcaoA();
});

p.then(
  () => console.log('Bom dia')
).catch(
  () => console.log('Boa tarde')
).finally(
  () => console.log('Boa noite')
);
