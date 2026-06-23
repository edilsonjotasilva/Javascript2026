const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btn = document.querySelector('#btn_copiar');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.forEach(curso => {
    curso.addEventListener('click', (evt) => {
        curso = evt.target;
        curso.classList.toggle('selecionado');
        console.log(curso);
    });
});

