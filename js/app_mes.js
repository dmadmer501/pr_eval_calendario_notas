const parametros = new URLSearchParams(window.location.search);

const mesActual = Number(parametros.get("mes"));

const MESES_ANO = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const nombreMes = document.querySelector("#nombre-mes");
const listaNotas = document.querySelector("#lista-notas");

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const formulario = document.querySelector("#formulario-nota");
const notaIdInput = document.querySelector("#nota-id");

let notasDelMes = [];

nombreMes.textContent = "Notas de " + MESES_ANO[mesActual];

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const notasExistentes = JSON.parse(localStorage.getItem("calendarioNotas")) || [];
    const notaId = notaIdInput.value;

    if(notaId){
        const nota = notasExistentes.find(n=> n.id == notaId);
        nota.titulo = titulo.value;
        nota.descripcion = descripcion.value;
    } else {
        const nuevaNota = {
            id: Date.now(),
            mes: mesActual,
            titulo: titulo.value,
            descripcion: descripcion.value
        };

        notasExistentes.push(nuevaNota);
    }

    localStorage.setItem("calendarioNotas", JSON.stringify(notasExistentes));

    titulo.value="";
    descripcion.value="";
    notaIdInput.value="";

    cargarNotas();
    renderizarNotas();

});

function cargarNotas(){
    const todasLasNotas = JSON.parse(localStorage.getItem("calendarioNotas")) || [];
    notasDelMes = todasLasNotas.filter(nota => nota.mes === mesActual);
}

function renderizarNotas(){
    listaNotas.innerHTML="";

    if(notasDelMes.length===0){
        const li = document.createElement("li");
        li.textContent="No hay notas todavía";
        listaNotas.appendChild(li);
        return;
    }

    notasDelMes.forEach(element=>{
        const li = document.createElement("li");
        const btnEliminar = document.createElement("button");
        const btnEditar = document.createElement("button");

        btnEliminar.textContent="Eliminar";
        btnEditar.textContent="Editar";
        
        btnEliminar.addEventListener("click",()=>{
            const confirmar = confirm("Seguro que quieres borrar la nota?");

            if(!confirmar) {
                return;
            }

            const todasLasNotas = JSON.parse(localStorage.getItem("calendarioNotas")) || [];
            const nuevasNotas = todasLasNotas.filter(nota => nota.id !== element.id);

            localStorage.setItem("calendarioNotas", JSON.stringify(nuevasNotas));

            cargarNotas();
            renderizarNotas();

        });

        btnEditar.addEventListener("click",()=>{

            titulo.value = element.titulo;
            descripcion.value = element.descripcion;
            notaIdInput.value = element.id;

        });

        li.innerHTML = `
            <h3>${element.titulo}</h3>
            <p>${element.descripcion}</p>
        `;

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);

        listaNotas.appendChild(li);

    });

}

cargarNotas();
renderizarNotas();