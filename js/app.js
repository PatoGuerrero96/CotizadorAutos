//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
// Contenedor para los resultados 
const resultado =  document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;
// crear objeto

const datosBusqueda ={
    marca : '',
    year : '',
    minimo:'',
    maximo:'',
    puertas: '',
    transmision:'',
    color:'',
}
// eventos
document.addEventListener('DOMContentLoaded', ()=>{

    mostrarAutos(autos); //muestra los autos
    //llena las opciones de año
    llenarSelect();


})

//Event listener para los select de busqueda
marca.addEventListener('change',e => {
    datosBusqueda.marca= e.target.value;
    filtrarAuto();
});
year.addEventListener('change',e => {
    datosBusqueda.year=parseInt(e.target.value) ;
    filtrarAuto();
});
minimo.addEventListener('change',e => {
    datosBusqueda.minimo= e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change',e => {
    datosBusqueda.maximo= e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change',e => {
    datosBusqueda.puertas= parseInt(e.target.value) ;
    filtrarAuto();
});

transmision.addEventListener('change',e => {
    datosBusqueda.transmision= e.target.value;
    filtrarAuto();
});

color.addEventListener('change',e => {
    datosBusqueda.color= e.target.value;
    filtrarAuto();
});




//funciones

function mostrarAutos(autos){

    limpiarHTML();
    autos.forEach( auto => {
const{marca,modelo,year,puertas,transmision,precio,color}= auto;
const autoHTML= document.createElement('p');


autoHTML.textContent=`${marca} / ${modelo} / Año: ${year} / Puertas: ${puertas} / Tipo de conducción: ${transmision} / Precio: ${precio} / Color: ${color} `;


//insertar en el html
resultado.appendChild(autoHTML);
    })
}
//Limpiar HTML

function limpiarHTML(){
while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
}
}


function llenarSelect(){

    for(let i = max; i>= min; i-- ){
        const opcion= document.createElement('option');
        opcion.value=i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega las opciones al combobox
    }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
         noresultado();
    }
  
    //console.log(resultado);
}
//funcion que envia mensaje que no hay resultado
function noresultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay resultado, busque por otros parametros';
    resultado.appendChild(noResultado);
}
function filtrarMarca(auto){

    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto){

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtrarMinimo(auto){

    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto){

    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){

    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto){

    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto){

    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}