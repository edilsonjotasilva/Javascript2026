const caixa1 = document.querySelector("#caixa1");
const cursos = [...document.querySelectorAll(".curso")];
caixa1.addEventListener("click", (evt) => {
    console.log("clicou na caixa1");
});

/**
 * O código abaixo é para impedir que o evento seja propagado para os outros elementos filhos da caixa1.
 */
  cursos.map((el) => {
        el.addEventListener("click", (evt) => {
            evt.stopPropagation();
        }); 
    });
