let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if(a == 3){
    resolve('Success')
  }else{
    reject('Failed')
  }
});

p.then(
  () => console.log('Bom dia')
).catch(
  () => console.log('Boa tarde')
).finally(
  () => console.log('Boa noite')
);  