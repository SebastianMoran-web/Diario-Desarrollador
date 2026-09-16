console.log("¡Hola DWEC! Mi taller ya funciona."); 

const boton = document.getElementById('boton');
const aviso = document.getElementById('texto');

let contador = 0;

boton.addEventListener('click', () => {
    contador++;
    texto.textContent = `Clics: ${contador}`;
});

const botonModo = document.getElementById('modonoche');

¡botonModo.addEventListener('click', () => {
  document.body.classList.toggle('tema-claro');

  if (document.body.classList.contains('tema-claro')) {
    botonModo.textContent = 'Modo oscuro';
  } else {
    botonModo.textContent = 'Modo claro';
  }
});