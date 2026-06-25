const todosCursos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const caixa1 = document.getElementById("caixa1");

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

// cursosC1.map((curso, index) => {
//     if(curso.innerHTML === "React"){
//         console.log("curso " +cursosC1[index].innerHTML+ " encontrado na posição " + index);
//     }
// });
const cursos = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Mysql", "Postgresql", "Rubi", "Arduino", "C++", "PHP"];
cursos.map((ele, index) => {
    const novoElemento = document.createElement("div");
    novoElemento.classList.add("curso", "c1");
    if(index > 5){
        novoElemento.classList.add("curso", "c2");
    }
    if(index == 8){
        novoElemento.addEventListener("click", (evento) => {
            novoElemento.classList.toggle("selecionado");
        });
    }
    novoElemento.innerHTML = ele;
    caixa1.appendChild(novoElemento);
});
