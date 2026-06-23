// const f = function(...arguments) {
//     let res =0;
//     for(let indice in arguments) {
//         res += arguments[indice];
//     }
//     return res;
// }
// console.log(f(2,3)) // 5;   

const f = (...arguments) => {
    let res =0;
    for(let valor of arguments) {
        res += valor;
    }
    return res;
}
console.log(f(2,3)) // 5;