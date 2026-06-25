const todosCursos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];

// todosCursos.map(curso => {
    //     curso.addEventListener("click", (evento) => {    
        //         curso = evento.target;
//         curso.classList.toggle("selecionado");
//     });
// });
////////////////////////////////////////////

// cursosC1.map((curso, index) => {
    //     curso.classList.add("selecionado");
//     if(index % 2 != 0){     
//         curso.classList.remove("selecionado");
//     console.log(curso.innerHTML);
//     }
// });
////////////////////////////////////////////

cursosC1.map((curso, index) => {
    if(curso.innerHTML === "React"){
        console.log("curso " +cursosC1[index].innerHTML+ " encontrado na posição " + index);
    }
});
