let todosCursos = [...document.getElementsByClassName('curso')];
let todosCursosC1 = [...document.getElementsByClassName('c1')];
let todosCursosC2 = [...document.getElementsByClassName('c2')];// let todosCursos = document.getElementsByClassName('curso');
let queryCursosUnico = [...document.querySelectorAll('.curso')];
let queryVariados= [...document.querySelectorAll("div > p")];
// console.log(queryCursosUnico);
console.log(queryVariados);

let CursoEspecial = document.getElementsByClassName('curso');
// console.log(todosCursos);   
// console.log(todosCursosC1);   
// console.log(`Curso espcial: ${CursoEspecial.innerText}`);   
// console.log(`Curso unico: ${queryCursosUnico.innerText}`);   
// console.log(todosCursosC2.innerText);   
// todosCursos = Array.from(todosCursos);

todosCursosC1.map(curso => {
    curso.classList.add('destaque');
});
queryCursosUnico.map(curso => {
   // console.log(`Curso unico: ${curso.innerText}`);
})

// let todosCursos2 = document.getElementsByClassName('curso');
// todosCursos2 = [...todosCursos2];

// todosCursos2.map(curso => {
//     console.log(curso.innerText);
// });