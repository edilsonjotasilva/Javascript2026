const resultado = document.getElementById("valorResult");
const operadores = [...document.querySelectorAll(".btnOperadores")];
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Removido o array global "valores" daqui para evitar o acúmulo

const opera = [
    // Soma
    (val) => {
        let res = 0;
        for(let v of val) { res += v; }
        return res;
    },
    // Subtração: inicia com o primeiro número e subtrai os próximos
    (val) => {
        let res = val[0];
        for(let i = 1; i < val.length; i++) { res -= val[i]; }
        return res;
    },
    // Multiplicação: inicia com o primeiro número e multiplica pelos próximos
    (val) => {
        let res = val[0];
        for(let i = 1; i < val.length; i++) { res *= val[i]; }
        return res;
    },
    // Divisão: inicia com o primeiro número e divide pelos próximos
    (val) => {
        let res = val[0];
        for(let i = 1; i < val.length; i++) { 
            if(val[i] === 0) return "Erro (Div/0)";
            res /= val[i]; 
        }
        return res;
    }
];

operadores.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Criamos o array LOCALMENTE dentro do clique. 
        // Ele nasce e morre a cada clique, garantindo apenas os valores atuais.
        const valores = [Number(valor1.value), Number(valor2.value)];
        
        const idBotao = botao.id;
        
        switch (idBotao) {
            case "btnSomar":
                resultado.value = opera[0](valores);
                break;
            case "btnSubtrair":
                resultado.value = opera[1](valores);
                break;
            case "btnMultiplicar":
                resultado.value = opera[2](valores);
                break;
            case "btnDividir":
                resultado.value = opera[3](valores);
                break;
        }
    });
});
