var olaMundo = "Bem vindo Valter ";


console.log(olaMundo);

let a = 10;
const b = '10';

console.log(a === b);

console.log(a == b);

console.log(a == b && typeof a == 'string');

console.log(a == b || typeof a == 'string');

let cor = "preto";

if (cor === "verde") {
    console.log('siga');

} else if (cor = 'Amarelo') {
    console.log('atenção');

} else {
    console.log('pare')
}

switch (cor) {
    case "verde":
        console.log('siga');
        break;

    case "amarelo":
        console.log('atenção');
        break;

    case "vermelho":
        console.log('pare');
        break;

    default:
        console.log("erro de informação");

}

let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n*i}`);
}


function somar(x1, x2) {
    return x1 + x2;
}
let resultado = somar(1, 2);

console.log(resultado);


let calc = (x1, x2, operador) => {
    return eval(`${x}  ${operador}  ${x2}`);

}
let resultado = calc(1, 2, "+");
console.log(resultado);