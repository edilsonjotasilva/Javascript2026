const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_transferir = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;
        curso.classList.toggle("selecionado");
        console.log(curso.classList + " - " + curso.id);
    });
});

// btn_transferir.addEventListener("click", () => {
//     const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
//     const cursosNãoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];
    
//         cursosSelecionados.map((el) => {    
//             caixa2.appendChild(el);
//         });
    
//         cursosNãoSelecionados.map((el) => {    
//             caixa1.appendChild(el);
//         });
    
// });
btn_transferir.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    const cursosNãoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];

if (cursosSelecionados.length > 0) {
    cursosSelecionados.map((el) => {    
        caixa2.appendChild(el);
    });
}  if   (cursosNãoSelecionados.length > 0) {
    cursosNãoSelecionados.map((el) => {    
        caixa1.appendChild(el);
    });
}
});

