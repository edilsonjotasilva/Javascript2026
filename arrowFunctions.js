const soma = (...valores) => { return valores.reduce((anterior, atual) => anterior + atual, 0); }
console.log(soma(1, 2, 3, 4, 5)); // Output: 15

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

const soma2 =(v1,v2) =>  v1 + v2;
console.log(soma2(10, 20)); // Output: 30

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

/**
 * A função soma é uma função de seta (arrow function) que recebe um número variável de argumentos
 * usando o operador rest (...valores).
 * Ela utiliza o método reduce para somar todos os valores fornecidos, começando com um valor inicial de 0. 
 * O resultado é a soma total dos valores passados como argumentos.
 * A função soma2 é uma função de seta que recebe dois argumentos (v1 e v2) e retorna a soma desses dois valores.
 * em uma arrow function, se o corpo da função tiver apenas uma expressão, você pode omitir as chaves {} e a palavra-chave return.
 */