const p_array = document.getElementById("array");
const txt_pesquisar = document.getElementById("txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.getElementById("resultado");
// const elementos_array = [10,5,3,22,15,74,6,7,8,9];
const elementos_array = ["maria", "pedro", 'joao', "felipe"];
p_array.innerHTML = `[${elementos_array}]`;

btnPesquisar.addEventListener("click", (pesquisar)=>{
    const pesquisar_por = txt_pesquisar.value;

    if(pesquisar_por === ""){
        resultado.innerHTML = "Digite um valor para pesquisar";
    }else{
        const pesquisar_por_numero = Number(pesquisar_por);
        const indice = elementos_array.findIndex(elemento => elemento === pesquisar_por_numero);
        console.log(indice)
        if(indice === -1){
            console.log(indice)
            resultado.innerHTML = `${pesquisar_por} não foi encontrado`;
        }else{
            resultado.innerHTML = `${pesquisar_por} foi encontrado na posição ${indice+1}`;
        }
    }
});
/**
 * Alinha : const indice = elementos_array.findIndex(elemento => elemento === pesquisar_por_numero); é o "coração" da busca no código. Ela varre o array elemento por elemento para encontrar a posição do número digitado.
Aqui está a explicação dividida em quatro partes anatômicas 
1. const indice =
·	Você está criando uma constante chamada indice.
·	Ela vai guardar o resultado final da busca.
·	Esse resultado será sempre um número inteiro: a posição da primeira ocorrência encontrada (começando do 0) ou -1 se o número não existir na lista. Ou seja, se um número digitado for encontrado na posição de índice 2, const indice recebe 2, se for encontrado na posição 5, const indice recebe 5, se não for encontrado em nenhuma posição const indice recebe -1
2. elementos_array.findIndex(...)
·	elementos_array é a sua lista que contém os números [10, 5, 3, 22, 15, 74, 6, 7, 8, 9, 10].
·	.findIndex() é um método nativo do JavaScript feito especificamente para arrays.
·	A função dele é percorrer o array (do primeiro ao último item) e testar uma condição que você define.
·	Ele para de procurar assim que a condição for verdadeira pela primeira vez e retorna a posição atual. 
3. elemento => ... (A Arrow Function)
·	Dentro do findIndex, você passa uma função de teste. O formato () => {} é uma Arrow Function (função seta).
·	elemento é um parâmetro que funciona como uma variável temporária.
·	O JavaScript vai rodar essa função para cada item do array, um por um.
·	No primeiro teste, elemento vale 10. No segundo, vale 5. No terceiro, vale 3, e assim por diante.
4. elemento === pesquisar_por_numero
·	Esta é a condição de teste de igualdade estrita (===), que verifica se o valor e o tipo de dado são idênticos.
·	O JavaScript compara o elemento atual do array com o número que o usuário digitou (pesquisar_por_numero).
·	Se a comparação for falsa (false): O findIndex pula para o próximo item do array.
·	Se a comparação for verdadeira (true): O findIndex interrompe a busca na hora e entrega o índice daquele item para a constante indice.
Exemplo Prático de Execução
Se o usuário digitar o número 22:
1.	O findIndex olha o índice 0 (valor 10). 10 === 22? Não.
2.	Olha o índice 1 (valor 5). 5 === 22? Não.
3.	Olha o índice 2 (valor 3). 3 === 22? Não.
4.	Olha o índice 3 (valor 22). 22 === 22? Sim!
5.	A busca para e a constante indice recebe o valor 3
6.  Se 22 não estiver na lista retorna -1 


 */

