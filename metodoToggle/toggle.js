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

const tirarSelecionado = (elemento) => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")];
    cursoSelecionado.map((elemento) => {
        elemento.classList.remove("selecionado");
    });
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.id = "c"+indice;
    novoElemento.classList.add("curso", "c1");
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener("click", (evento) => {
        tirarSelecionado(novoElemento);
        evento.target.classList.toggle("selecionado");
        
        
    });
    return novoElemento;
}
cursos.map((curso, index) => { // HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Mysql"
    const novoElemento = criarNovoCurso(curso);
    caixaCursos.appendChild(novoElemento);
    indice++;
});
const cursoSelecionados = () => {
    const cursoQueSelecionei = [...document.querySelectorAll(".selecionado")];
    console.log("tipo de selecao: "+cursoQueSelecionei[0]);
    return cursoQueSelecionei[0];
}
/**
* o código abaixo é usado somente para mostrar o curso selecionado
* se remover esse código e o botão btnCursoSelecionado, o programa continuará funcionando normalmente
*/
btnCursoSelecionado.addEventListener("click", (evento) => {
    try{
        alert(`Curso Selecionado: ${cursoSelecionados().innerHTML}`);
    }catch(erro){
        alert("Nenhum curso selecionado");
    }
    
    
});

btnRemoverCurso.addEventListener("click", (evento) => {
    const removeSelected = cursoSelecionados();
    try{
        removeSelected.remove();
    }catch(erro){
        alert("Nenhum curso selecionado");
    }
});
/**
 * o elemento btnAdicionarNovoCursoAntes é usado para adicionar um curso antes do curso selecionado
 * o elemento btnAdicionarNovoCursoDepois é usado para adicionar um curso depois do curso selecionado
*/
btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
    const addselectedBefore = cursoSelecionados();
    try{
        if(nomeCurso.value != ""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            if(addselectedBefore != undefined){
            caixaCursos.insertBefore(novoCurso,cursoSelecionados());    
            }else{
                alert("Selecione um curso para inserir antes dele");
            }
        }else{
            alert("Digite um nome de curso para adicionar");
        }
    }catch(erro){
        alert("Digite um nome de curso");
        }
     
    });
    btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
        const addselectedAfter = cursoSelecionados();
        try{
        if(nomeCurso.value != ""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            if(addselectedAfter != undefined){
            caixaCursos.insertBefore(novoCurso,cursoSelecionados().nextSibling);    
            }else{
                alert("Selecione um curso para inserir DEPOIS dele");
            }
        }else{
            alert("Digite um nome de curso para adicionar");
        }
    }catch(erro){
        alert("Digite um nome de curso");
        }
        });
        ////////////////////////////////////////////
        
        