let lista = ["uova", "pane", "olive", "tonno" ];
const listaHtml = document.getElementById("lista");

let i=0;

while(i<lista.length){
    const liElement =document.createElement("li");
    liElement.textContent= lista[i];
    listaHtml.append(liElement);
    i++;
}