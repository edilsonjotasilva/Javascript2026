const caixaCursos = document.getElementById("caixaCursos");
const btn_c =[...document.getElementsByClassName(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Mysql"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois");

let indice = 0;

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.id = "c"+indice;
    novoElemento.classList.add("curso", "c1");
    novoElemento.innerHTML = curso;
    
    const comandos = document.createElement("div");
    comandos.classList.add("comandos");
    
    const rb = document.createElement("input");
    rb.name = "rb_curso";
    rb.type = "radio";
    
    novoElemento.appendChild(comandos);
    comandos.appendChild(rb);
    return novoElemento;
}
cursos.map((el, index) => {
    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
});
const radioSelecionado = () => {
    const TodosRadios = [...document.querySelectorAll("input[type='radio']")];
    let RadioSelecionado = TodosRadios.filter(radio => radio.checked);
    return RadioSelecionado[0];
}
btnCursoSelecionado.addEventListener("click", (evento) => {
    const radSelec = radioSelecionado();
    if(radSelec != undefined){
        // const cursoSelecionado = RadioSelecionado.parentNode.parentNode.firstChild.textContent;
        const cursoSelecionado = radSelec.parentNode.previousSibling.textContent;
        alert(`Curso Selecionado: ${cursoSelecionado}`);
    }else{
        alert("Nenhum curso selecionado");
    }
    
});

btnRemoverCurso.addEventListener("click", (evento) => {
    const removeSelected = radioSelecionado();
    try{
        const elemento = removeSelected.parentNode.parentNode;
        elemento.remove(elemento);
    }catch(erro){
        alert("Nenhum curso selecionado");
    }
});
 btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
     const radSelec = radioSelecionado();
    if(radSelec != undefined){
        // const cursoSelecionado = RadioSelecionado.parentNode.parentNode.firstChild.textContent;
        const cursoSelecionado = radSelec.parentNode.parentNode;
        console.log('Curso Selecionado:'+ cursoSelecionado);
    }else{
        alert("Nenhum curso selecionado");
    }
});
btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
    const novoCurso = criarNovoCurso(cursos[cursos.length-1]);
    caixaCursos.appendChild(novoCurso);
});
////////////////////////////////////////////

