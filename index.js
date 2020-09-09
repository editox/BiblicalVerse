// const title = document.getElementById("title").checked;
// const content = document.getElementById("content").checked;

const switchContainer = document.getElementById("switch");
const switchContent = document.getElementById("content");

const container = document.querySelector('.container');



// switchTitle.addEventListener('change', () => title.style.backgroundColor = '#2b2b2b');
switchContainer.addEventListener('change', cardRotate);


//cambiando una clase
function cardRotate() {
  container.classList.toggle('rotate');
  console.log('Estoy girando.....yuuuuuju!');
}



