const elementos_array = [25, 30, 18, 27, 23];
const pesquisar = document.getElementById("btnPesquisar");
const resultado = document.getElementById("resultado");
const p_array = document.querySelector("#array");
p_array.innerHTML = elementos_array;

pesquisar.addEventListener("click", () => {
  const retorno = elementos_array.some((e, i) => {
        console.log(e)
        if (e > 29) {
            resultado.innerHTML = "elemento encontrado em posição " + (i + 1) ;
            return e;
        } else {
            resultado.innerHTML = "Nenhum telemento encontrado";
            return e;
        }
    });
});
