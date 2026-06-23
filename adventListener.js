// const c1 = document.getElementById("c1");
const cursos = [...document.querySelectorAll(".curso")];
// console.log(c1);

// c1.addEventListener("click", (evt) => {
//     // console.log(evt);
//     const element = evt.target;
//     element.classList.add("destaque");
//     console.log("Clicou no curso: " + element.innerHTML);
//     console.log("Clicou no indice: " + element.id);
// });
cursos.forEach((element) => {
    element.addEventListener("click", (evt) => {
        console.log(evt);
        const element = evt.target;
        element.classList.add("destaque");
        console.log("Clicou no curso: " + element.innerText);
        console.log(`Elemento: ${element.target} clicado`);
    });
});