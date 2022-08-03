function moveSelected (event) {
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const box3 = document.querySelector('.box3');
  const box4 = document.querySelector('.box4');
  box1.classList.remove('selected');
  box2.classList.remove('selected');
  box3.classList.remove('selected');
  box4.classList.remove('selected');
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