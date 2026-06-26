const caixaCursos = document.getElementById("caixaCursos");
const btn_c =[...document.getElementsByClassName(".curso")];
const c1_2 = document.querySelectorAll("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Mysql"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

cursos.map((el, index) => {
    const novoElemento = document.createElement("div");
    novoElemento.id = "c"+index;
    novoElemento.classList.add("curso", "c1");
    novoElemento.innerHTML = el;

    const comandos = document.createElement("div");
    comandos.classList.add("comandos");
    
    const rb = document.createElement("input");
    rb.name = "rb_curso";
    rb.type = "radio";
    
    novoElemento.appendChild(comandos);
    comandos.appendChild(rb);
    caixaCursos.appendChild(novoElemento);
});

btnCursoSelecionado.addEventListener("click", (evento) => {
    const TodosRadios = [...document.querySelectorAll("input[type='radio']")];
    let RadioSelecionado = TodosRadios.filter(radio => radio.checked);
    RadioSelecionado = RadioSelecionado[0];
    console.log(RadioSelecionado);
    // const cursoSelecionado = RadioSelecionado.parentNode.parentNode.firstChild.textContent;
    const cursoSelecionado = RadioSelecionado.parentNode.previousSibling.textContent;
    alert(`Curso Selecionado: ${cursoSelecionado}`);
});

////////////////////////////////////////////

