const boton = document.querySelector('#saludarButton');
boton.addEventListener('click', function(event) {
  event.stopPropagation(); 
  alert('¡Hola!'); 
});