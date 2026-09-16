console.log("¡Hola DWEC! Mi taller ya funciona."); 

const boton = document.getElementById('boton');
const aviso = document.getElementById('texto');

let contador = 0;

boton.addEventListener('click', () => {
    contador++;
    texto.textContent = `Clics: ${contador}`;
});