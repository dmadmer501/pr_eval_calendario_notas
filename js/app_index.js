const parrillaMeses = document.querySelector("#parrilla-meses");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnListar = document.querySelector("#btnListar");
const listaNotas = document.querySelector("#listaNotas");

const MESES_ANO = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

let notas = cargarNotas();

btnLimpiar.addEventListener("click", () => {
    const confirmar = confirm("Seguro que quieres borrar todas las notas?");
    if(!confirmar) return;
    localStorage.removeItem("calendarioNotas");
    notas = [];
    renderizarMeses();
    listaNotas.innerHTML = "";
});

btnListar.addEventListener("click", mostrarNotas);
function cargarNotas(){
    const datos = localStorage.getItem("calendarioNotas");
    return datos ? JSON.parse(datos) : [];
}

function renderizarMeses(){
    parrillaMeses.innerHTML = "";
    MESES_ANO.forEach((nombre,index)=>{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-mes");
        const notasDelMes = notas.filter(nota => nota.mes === index);
        const numNotas = notasDelMes.length;
        const palabra = numNotas === 1 ? "nota" : "notas";

        if(numNotas>0){
            tarjeta.classList.add("con-notas");
        }

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <h4>${numNotas} ${palabra}</h4>
        `;
        tarjeta.addEventListener("click",()=>{
            window.location.href = `mes.html?mes=${index}`;
        });
        parrillaMeses.appendChild(tarjeta);
    });
}

function mostrarNotas(){
    listaNotas.innerHTML="";

    if(notas.length===0){
        const p = document.createElement("p");
        p.textContent="No hay notas todavía";
        listaNotas.appendChild(p);
        return;
    }

    notas.forEach(nota=>{
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${MESES_ANO[nota.mes]}</strong>: ${nota.titulo}
        `;
        listaNotas.appendChild(div);
    });
}

renderizarMeses();