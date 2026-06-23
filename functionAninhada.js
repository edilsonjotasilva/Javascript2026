const soma = (...valores)=>{
    const somar=(val)=>{
        let res=0;
        for(v of val){
            res+=v;
        }
        return res
                
    }
    return somar(valores);
}
    console.log(soma(1,2,3,4,5)); // Output: 15
/**
 * A função soma é uma função de seta (arrow function) que recebe um número variável de argumentos
 * usando o operador rest (...valores). Dentro da função soma, é definida uma função aninhada chamada somar,
 *  que recebe um array de valores (val) e calcula a soma desses valores usando um loop for...of. 
 * A função soma então chama a função somar, passando os valores recebidos como argumentos, e retorna o resultado da soma total.
 * quanda os parametros rest ...valores são passados para a função soma, eles são agrupados em um array chamado valores.
 * A função somar é definida dentro da função soma, o que a torna uma função aninhada. 
 * a função soma retorna a chamada da função somar, passando o array valores como argumento. A função somar itera sobre os elementos do array val usando um loop for...of, acumulando a soma dos valores em uma variável res, que é retornada no final.
 */