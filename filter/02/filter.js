const caixaCursos = document.getElementById("caixaCursos");
const btn_c =[...document.getElementsByClassName(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Mysql"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois");
const nomeCurso=document.getElementById("nomeCurso")

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
        elemento.remove(evento);
    }catch(erro){
        alert("Nenhum curso selecionado");
    }
});
/**
 * o elemento btnAdicionarNovoCursoAntes é usado para adicionar um curso antes do curso selecionado
 * o elemento btnAdicionarNovoCursoDepois é usado para adicionar um curso depois do curso selecionado
 */
btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
    const radSelec = radioSelecionado();
    //  console.log(radSelec)
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado=radSelec.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert("Digite um nome de curso");
        }}
        catch(erro){
        }
        });
        btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
            try{
                if(nomeCurso.value != ""){
                    const cursoSelecionado=radioSelecionado().parentNode.parentNode
                    const novoCurso=criarNovoCurso(nomeCurso.value)
                    caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
                }else{
                    alert("Digite um nome de curso");
                }}
                catch(erro){
                }
        });
        ////////////////////////////////////////////
        
        