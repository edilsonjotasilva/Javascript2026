const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[25,30,18,27,23]
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    // resultado.innerHTML="Valor não encontrado"
    const ret=elementos_array.every((e,i)=>{
        if(e >= 18){
            resultado.innerHTML="todos os elementos são maiores que 18 => ["+elementos_array+"]";     
            return e
        }else{
            resultado.innerHTML="Elemento "+e+" não é maior que 18 na posição "+(i+1)+" => ["+elementos_array+"]";
            return e
        }   
    })
    console.log(ret)
})
/**
 * O método every() é usado para verificar se todos os elementos de um array satisfazem uma determinada condição.
 * O método every() retorna um valor booleano, que indica se todos os elementos do array satisfazem a condição.
 * O método every() é muito útil quando você precisa verificar se todos os elementos de um array satisfazem uma determinada condição.
 * Por exemplo, se você quiser verificar se todos os elementos de um array são maiores que 18, você pode usar o método every() para verificar isso.
 * O método every() é uma função do JavaScript que é usada para verificar se todos os elementos de um array satisfazem uma determinada condição.
 * */