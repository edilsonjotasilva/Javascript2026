let elements = document.getElementsByTagName('div');
elements = [...elements]
elements.map((element, indice) => {
    element.innerHTML = `Curso CFB`;
    console.log(element)
})
//nesse exemplo, o elements recebe o spread dele mesmo, ou seja, ele se torna um array,
//e ai sim podemos usar o map para iterar sobre ele.
//O map é um método de array que cria um novo array com os resultados da chamada de uma função 
//para cada elemento do array original. No exemplo acima, estamos usando o map para alterar o conteúdo HTML 
//de cada elemento div para "Curso CFB" e também para imprimir cada elemento no console.

// se eu quiser alterar somente o conteúdo do primeiro elemento, eu posso usar o indice do map para isso, por exemplo:
elements.map((element, indice) => {
    if(indice === 0){
        element.innerHTML = `Curso CFB`;
    }
})
