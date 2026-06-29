// const elementos_array = [10,5,3,22,15,74,6,7,8,9];

const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["html","css","javascript"]
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
    const ret=elementos_array.find((e,i)=>{
        console.log(e,i)
        if(e.toUpperCase()===txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Valor encontrado " + e + " na posição " + (i+1)
            return e
        }
    })
    console.log(ret)
})
/**
 * diferente do metodo findIndex, o find() percorre o array e testa a condição de igualdade estrita (===) para cada elemento do array.
 * O find() retorna o primeiro elemento que satisfaz a condição de teste, ou undefined se nenhum elemento satisfaz a condição.
 * O find() é mais eficiente do que o findIndex() porque ele não precisa percorrer o array para encontrar o índice do elemento.
 * O find() é mais fácil de ler e entender, pois ele retorna o elemento que satisfaz a condição de teste, em vez de o índice do elemento.
 */