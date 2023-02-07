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



// Criando botão que retorne a cor do quadro para a cor inicial #9
btnReset = document.getElementById('clear-board');
function removeColor() {
  const removePixelColor = document.querySelectorAll('.pixel');
  for (let i = 0; i < removePixelColor.length; i += 1) {
    removePixelColor[i].style.backgroundColor = 'white';
};
}
btnReset.addEventListener('click', removeColor);

// criando botão para ter tamanho dinâmico de grid de quadrados

const pixelBoard = document.querySelector('#pixel-board');
const sizeElement = document.querySelector('#board-size');
const size = sizeElement.value;
const generateBoard = document.querySelector('#generate-board');

function gridSize(grid) {
  pixelBoard.style.setProperty('--size', grid);
  pixelBoard.innerHTML = ' ';
  for (let i = 0; i < grid * grid; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
};
gridSize(size);

// Criando função para selecionar a cor e preencher os pixels no quadrado #8
function pixelColorSelector(event) {
  const selected = document.querySelector('.selected');
  const styleFunction = window.getComputedStyle(selected, null);
  const backgroundColor = styleFunction.getPropertyValue('background-color');
  event.target.style.backgroundColor = backgroundColor;
}
const pixel = document.querySelectorAll('.pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i] = pixel[i].addEventListener('click', pixelColorSelector);
}