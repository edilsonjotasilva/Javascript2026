const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btn_copiar = document.querySelector('#btn_copiar');
const btn_retornar = document.querySelector('#btn_retornar');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target;
        curso.classList.toggle('selecionado');
    });
});

btn_copiar.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')];
    cursosSelecionados.map((el) => {    
        caixa2.appendChild(el);
    });
});
btn_retornar.addEventListener('click', () => {
    const cursosSelecionadosRetorno = [...document.querySelectorAll('.selecionado')];
    cursosSelecionadosRetorno.map((el) => {    
        caixa1.appendChild(el);
    });
});



