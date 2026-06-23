function soma (...valores) {

        return valores.reduce((anterior, atual) => anterior + atual, 0);  
        // return valores.reduce((anterior, atual,pos) => anterior + atual);  
}
console.log(soma()); // Output: 20

/**
 * anterior: é o valor acumulado retornado pela função de callback na última execução. Na primeira execução, ele é igual ao valor inicial fornecido (neste caso, 0).
 * atual: é o valor do elemento atual do array que está sendo processado.
 * na segunda execução, anterior será igual a 1 (o resultado da primeira execução) e atual será igual a 2 (o próximo elemento do array). O processo continua até que todos os elementos do array tenham sido processados, resultando na soma total dos valores.
 */