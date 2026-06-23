function* geradora() {
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
    
}
const g = geradora(); // retorna um objeto do tipo Generator, que é um iterador especial que pode ser pausado e retomado.
console.log(g.next().value); // Output: "Vermelho"  
console.log(g.next().value);// Output: "Verde"
console.log(g.next().value);// Output: "Azul"
console.log(g.next().value);

// outro exemplo
function* perguntas() { 
    const nome = yield "Qual é o seu nome?"; // A função yield pausa a execução da função e retorna o valor "Qual é o seu nome?" para o chamador. O valor passado para next() na próxima chamada será atribuído à variável nome.
    const esporte = yield "Qual é o seu esporte favorito?";
    return `Olá ${nome}, 
    seu esporte favorito é ${esporte}.`; // A função retorna uma string formatada usando os valores de nome e esporte.
}

const p = perguntas(); // Cria um objeto do tipo Generator a partir da função perguntas.
console.log(p.next().value);// Output: "Qual é o seu nome?" - A primeira chamada a next() inicia a execução da função perguntas e retorna o valor do primeiro yield.
console.log(p.next("Edilson").value);// Output: "Qual é o seu esporte favorito?" - A segunda chamada a next() passa o valor "Edilson", que é atribuído à variável nome, e retorna o valor do segundo yield.
console.log(p.next("Futebol").value);// Output: "Olá Edilson, seu esporte favorito é Futebol." - A terceira chamada a next() passa o valor "Futebol", que é atribuído à variável esporte, e retorna a string formatada com os valores de nome e esporte.
