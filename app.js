//Obtenemos los elementos HTML
const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

//Se iteran todos los elementos de botonNumeros y a cada uno se le agrega un evento de click
//Y se manda a llamar el metodo agregarNumero de la clase Display
botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => {
        display.agregarNumero(boton.innerHTML);
    })
})

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',() =>{
        display.computar(boton.value);
    })
})