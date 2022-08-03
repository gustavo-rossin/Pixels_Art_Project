// Adicionado JS no projeto com a função para remover e adicionar a classe selected ao clicar em cada box. #7
function moveSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

box1.addEventListener('click', moveSelected);
box2.addEventListener('click', moveSelected);
box3.addEventListener('click', moveSelected);
box4.addEventListener('click', moveSelected);
