const switchContainer = document.getElementById("switch");
const container = document.querySelector('.container');

switchContainer.addEventListener('change', cardRotate);

//cambiando una clase
function cardRotate() {
  container.classList.toggle('rotate');
  console.log('Estoy girando.....yuuuuuju!');
}



