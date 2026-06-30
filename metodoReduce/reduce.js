const p_array = document.getElementById('array');
const p_resultado = document.getElementById('resultado');
const btnReduzir = document.getElementById('btnReduzir');
const elementos_array = [1,2,3,4,5];
p_array.innerHTML = "[ " + elementos_array.join(', ') + " ]";   

let acum = [];
let elem = [];
let dobro = [];
btnReduzir.addEventListener('click', (evt) => {
   const reto = elementos_array.reduce((acumulador, elemento) => {
        
        acum.push(acumulador);
        elem.push(elemento);
        dobro.push(elemento*2);
        return acumulador + elemento;
    });
    p_resultado.innerHTML = `Retorno: ${reto}<br>Acumulador: ${acum} <br> Elemento: ${elem}<br>Dobro: ${dobro}`;
});
/**
 * saida do script acima
Retorno: 15
Acumulador: 1,3,6,10
Elemento: 2,3,4,5
Dobro: 4,6,8,10
 */