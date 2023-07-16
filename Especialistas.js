const calendar = document.querySelector(".calendario"),
date = document.querySelector(".fecha"),
daysContainer = document.querySelector(".dias");
ant = document.querySelector(".ant");
post = document.querySelector(".post");
hoyBoton = document.querySelector(".hoy-btn");

let hoy = new Date();
let diaActivo;
let mes = hoy.getMonth();
let anio = hoy.getFullYear();

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

function iniciarcalendario() {
    const primerDia = new Date(anio, mes, 1);
    const ultimoDia = new Date(anio, mes + 1, 0);
    const ultimoDiaAnt = new Date(anio, mes, 0);
    const diasAnt = ultimoDiaAnt.getDate();
    const ultimaFecha = ultimoDia.getDate();
    const dia = primerDia.getDay();
    const proxDias = 7 - ultimoDia.getDay() - 1;

//titulo del calendario
    date.innerHTML = meses[mes] + " " + anio;

//dias del calendario
let dias = " ";

//dias del mes anterior
for (let x = dia; x > 0; x--) {
    dias += `<div class= "dia ultimaFecha" >${diasAnt - x + 1}</div>`;
}
//dias del mes actual 
for(let i = 1; i <= ultimaFecha; i++){
    if(
      i === new Date().getDate() &&
      anio === new Date().getFullYear() &&
      mes === new Date().getMonth()
    ){
      dias += `<div class="dia hoy" >${i}</div>`;
    }
    else{
      dias += `<div class="dia" >${i}</div>`;

    }
}
//dias del mes siguiente
for(let j = 1; j <= proxDias; j++){
    dias += `<div class="dia" >${j}</div>`;

}

    daysContainer.innerHTML = dias;
}
iniciarcalendario();

//mes anterior
function mesAnt(){
    mes--;
    if (mes < 0) {
        mes = 11;
        anio--;
    }
    iniciarcalendario();
}
function mesPost(){
    mes++;
    if (mes > 11) {
        mes = 0;
        anio++;
    }
    iniciarcalendario();
}
ant.addEventListener("click", mesAnt);
post.addEventListener("click", mesPost);

//boton HOY
hoyBoton.addEventListener("click", () => {
    hoy = new Date();
    mes = hoy.getMonth();
    anio = hoy.getFullYear();
    iniciarcalendario();
})

