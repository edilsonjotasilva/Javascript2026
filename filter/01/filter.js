const idades = [15,21,32,17,45,50,11,65,22,12]
const idadesMaioresQue18 = idades.filter(idade => idade >= 18);
const idadesMenoresQue18 = idades.filter(idade => idade < 18);
console.log(idadesMaioresQue18);
console.log(idadesMenoresQue18);

/**
 * filter(): Percorre cada item da lista original.
 * idade é cada item da lista original.
 * idade => idade > 18: É a função que testa cada número.
 * Retorno: Se a condição for verdadeira (true), o número entra na nova lista. 
 */