var a = 1; // possui escopo global
let b = 2;
const c = 3;
aa = 10;

function teste(){
    var d = 4; // possui o escopo da função
    let e = 5; // variável local
    const f = 6; // variável local
    g = 7; // possui escopo global
    console.log(a +' '+ b + ' ' + c + ' ' 
                  +' ' + d + ' '+ ' ' + e + ' ' + f + ' ' + g);
}

teste()

console.log(a +' '+ b + ' ' + c + ' ' 
                  +' ' + g);