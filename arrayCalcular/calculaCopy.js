const resultado = document.getElementById("valorResult");
const operadores = [...document.querySelectorAll(".btnOperadores")];
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Alterado para forEach, já que .map() serve para retornar um novo array
operadores.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        // Converte os valores dos inputs para números
        const n1 = Number(valor1.value);
        const n2 = Number(valor2.value);
        
        // Pega o ID do botão clicado através de evento.target.id ou botao.id
        const idBotao = botao.id;

        console.log("=> " + n1);
        console.log("=> " + n2);
        console.log("id => " + idBotao);

        switch (idBotao) {
            case "btnSomar":
                resultado.value = n1 + n2;
                break;
            case "btnSubtrair":
                resultado.value = n1 - n2;
                break;
            case "btnMultiplicar":
                resultado.value = n1 * n2;
                break;
            case "btnDividir":
                resultado.value = n2 !== 0 ? n1 / n2 : "Erro (Div/0)";
                break;
        }
    });
});
