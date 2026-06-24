const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
// console.log(caixa1);
/**
 * 0 text
1 div#c1.curso.c1
2 text
3 div#c2.curso.c1
4 text
5 div#c3.curso.c1
6 text
7 div#c4.curso.c1
8 text
9 div#c5.curso.c1
10 text
11 div#c6.curso.c1
12 text
length 13
 */
console.log(caixa1.children);  
/**
 * c1, c2, c3, c4, c5, c 
 */
// console.log(caixa1.children);
/**
 * O atributo firstChild retorna o primeiro elemento filho da caixa1.
 */
// console.log(caixa1.firstElementChild);
// console.log(btn_c[0].lastElementSibling);